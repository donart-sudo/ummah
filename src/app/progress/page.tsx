'use client'

import { useState, useEffect, useCallback } from 'react'
import { morningRoutine, nightRoutine } from '@/lib/routine-data'

function getDeviceId(): string {
  if (typeof window === 'undefined') return ''
  return localStorage.getItem('ummah_device_id') || ''
}

interface DayData {
  date: string
  morning: number
  night: number
}

export default function ProgressPage() {
  const [days, setDays] = useState<DayData[]>([])
  const [loading, setLoading] = useState(true)
  const [streak, setStreak] = useState(0)

  const morningTotal = morningRoutine.length
  const nightTotal = nightRoutine.length

  const loadHistory = useCallback(async () => {
    const deviceId = getDeviceId()
    if (!deviceId) {
      setLoading(false)
      return
    }

    const to = new Date().toISOString().split('T')[0]
    const from = new Date(Date.now() - 29 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

    try {
      const res = await fetch(`/api/progress?device_id=${deviceId}&from=${from}&to=${to}`)
      const json = await res.json()

      if (json.data) {
        const byDate: Record<string, { morning: Set<string>; night: Set<string> }> = {}

        for (const row of json.data) {
          if (!byDate[row.date]) {
            byDate[row.date] = { morning: new Set(), night: new Set() }
          }
          byDate[row.date][row.routine_type as 'morning' | 'night'].add(row.item_id)
        }

        const result: DayData[] = []
        for (let i = 29; i >= 0; i--) {
          const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000)
          const dateStr = d.toISOString().split('T')[0]
          const entry = byDate[dateStr]
          result.push({
            date: dateStr,
            morning: entry ? entry.morning.size : 0,
            night: entry ? entry.night.size : 0,
          })
        }
        setDays(result)

        // Calculate streak
        let s = 0
        for (let i = result.length - 1; i >= 0; i--) {
          const day = result[i]
          if (day.morning === morningTotal && day.night === nightTotal) {
            s++
          } else if (i === result.length - 1 && (day.morning > 0 || day.night > 0)) {
            // Today in progress doesn't break streak
            continue
          } else {
            break
          }
        }
        setStreak(s)
      }
    } catch {
      // Fallback: load from localStorage
      const result: DayData[] = []
      for (let i = 29; i >= 0; i--) {
        const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000)
        const dateStr = d.toISOString().split('T')[0]
        const stored = localStorage.getItem(`ummah_progress_${dateStr}`)
        let morning = 0
        let night = 0
        if (stored) {
          const items: string[] = JSON.parse(stored)
          morning = items.filter(k => k.startsWith('morning-')).length
          night = items.filter(k => k.startsWith('night-')).length
        }
        result.push({ date: dateStr, morning, night })
      }
      setDays(result)
    } finally {
      setLoading(false)
    }
  }, [morningTotal, nightTotal])

  useEffect(() => {
    loadHistory()
  }, [loadHistory])

  const dayNames = ['Di', 'He', 'Ma', 'Me', 'Ej', 'Pr', 'Sh']

  function getDayLabel(dateStr: string) {
    const d = new Date(dateStr + 'T12:00:00')
    return dayNames[d.getDay()]
  }

  function getDateNum(dateStr: string) {
    return new Date(dateStr + 'T12:00:00').getDate()
  }

  function getCellColor(morning: number, night: number): string {
    const morningPct = morningTotal > 0 ? morning / morningTotal : 0
    const nightPct = nightTotal > 0 ? night / nightTotal : 0
    const total = (morningPct + nightPct) / 2

    if (total === 0) return 'bg-cream-100 dark:bg-night-800'
    if (total < 0.25) return 'bg-emerald-800/20 dark:bg-emerald-700/20'
    if (total < 0.5) return 'bg-emerald-800/40 dark:bg-emerald-700/40'
    if (total < 0.75) return 'bg-emerald-800/60 dark:bg-emerald-700/60'
    if (total < 1) return 'bg-emerald-700/80 dark:bg-emerald-600/80'
    return 'bg-emerald-700 dark:bg-emerald-500'
  }

  // Stats
  const totalCompletedDays = days.filter(d => d.morning === morningTotal && d.night === nightTotal).length
  const totalReadings = days.reduce((sum, d) => sum + d.morning + d.night, 0)

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-8">
      <h1 className="font-arabic text-2xl font-bold text-emerald-950 dark:text-cream-50 mb-1">
        Progresi
      </h1>
      <p className="text-sm text-emerald-950/50 dark:text-cream-200/50 mb-6">
        Ndjek rrugen tende drejt nje jete me te mire islame
      </p>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin" />
        </div>
      ) : (
        <>
          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white dark:bg-night-800 rounded-2xl p-4 border border-gold-500/10 text-center">
              <p className="text-2xl font-bold text-gold-500">{streak}</p>
              <p className="text-xs text-emerald-950/50 dark:text-cream-200/50 mt-1">Dite rresht</p>
            </div>
            <div className="bg-white dark:bg-night-800 rounded-2xl p-4 border border-gold-500/10 text-center">
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{totalCompletedDays}</p>
              <p className="text-xs text-emerald-950/50 dark:text-cream-200/50 mt-1">Dite te plota</p>
            </div>
            <div className="bg-white dark:bg-night-800 rounded-2xl p-4 border border-gold-500/10 text-center">
              <p className="text-2xl font-bold text-indigo-500">{totalReadings}</p>
              <p className="text-xs text-emerald-950/50 dark:text-cream-200/50 mt-1">Lexime totale</p>
            </div>
          </div>

          {/* Calendar heatmap - last 30 days */}
          <div className="bg-white dark:bg-night-800 rounded-2xl p-4 border border-gold-500/10 mb-6">
            <h2 className="text-sm font-semibold text-emerald-950 dark:text-cream-50 mb-4">
              30 ditet e fundit
            </h2>
            <div className="grid grid-cols-10 gap-1.5">
              {days.map((day) => (
                <div key={day.date} className="flex flex-col items-center gap-1">
                  <span className="text-[9px] text-emerald-950/30 dark:text-cream-200/30">
                    {getDayLabel(day.date)}
                  </span>
                  <div
                    className={`w-full aspect-square rounded-md ${getCellColor(day.morning, day.night)} transition-colors`}
                    title={`${day.date}: ${day.morning}/${morningTotal} mengjes, ${day.night}/${nightTotal} nate`}
                  />
                  <span className="text-[9px] text-emerald-950/30 dark:text-cream-200/30">
                    {getDateNum(day.date)}
                  </span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-1.5 mt-4">
              <span className="text-[10px] text-emerald-950/40 dark:text-cream-200/40">Pak</span>
              <div className="w-3 h-3 rounded-sm bg-cream-100 dark:bg-night-900" />
              <div className="w-3 h-3 rounded-sm bg-emerald-800/20 dark:bg-emerald-700/20" />
              <div className="w-3 h-3 rounded-sm bg-emerald-800/40 dark:bg-emerald-700/40" />
              <div className="w-3 h-3 rounded-sm bg-emerald-700/80 dark:bg-emerald-600/80" />
              <div className="w-3 h-3 rounded-sm bg-emerald-700 dark:bg-emerald-500" />
              <span className="text-[10px] text-emerald-950/40 dark:text-cream-200/40">Shume</span>
            </div>
          </div>

          {/* Today's detail */}
          {days.length > 0 && (() => {
            const today = days[days.length - 1]
            return (
              <div className="bg-white dark:bg-night-800 rounded-2xl p-4 border border-gold-500/10">
                <h2 className="text-sm font-semibold text-emerald-950 dark:text-cream-50 mb-3">
                  Sot
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-500">
                          <circle cx="12" cy="12" r="4" />
                          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        </svg>
                        <span className="text-sm text-emerald-950/70 dark:text-cream-200/70">Mengjesi</span>
                      </div>
                      <span className="text-sm font-bold text-amber-500">{today.morning}/{morningTotal}</span>
                    </div>
                    <div className="h-2 bg-cream-100 dark:bg-night-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full transition-all"
                        style={{ width: `${morningTotal > 0 ? (today.morning / morningTotal) * 100 : 0}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-500">
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                        <span className="text-sm text-emerald-950/70 dark:text-cream-200/70">Nata</span>
                      </div>
                      <span className="text-sm font-bold text-indigo-500">{today.night}/{nightTotal}</span>
                    </div>
                    <div className="h-2 bg-cream-100 dark:bg-night-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all"
                        style={{ width: `${nightTotal > 0 ? (today.night / nightTotal) * 100 : 0}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
        </>
      )}
    </div>
  )
}
