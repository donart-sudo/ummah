'use client'

import { useState, useEffect, useCallback } from 'react'
import { morningRoutine, nightRoutine } from '@/lib/routine-data'
import { RoutineItem } from '@/types'

function getDeviceId(): string {
  if (typeof window === 'undefined') return ''
  let id = localStorage.getItem('ummah_device_id')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('ummah_device_id', id)
  }
  return id
}

function getToday(): string {
  return new Date().toISOString().split('T')[0]
}

function isNightTime(): boolean {
  const hour = new Date().getHours()
  return hour >= 18 || hour < 6
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'morning' | 'night'>(isNightTime() ? 'night' : 'morning')
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set())
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)

  const today = getToday()
  const routine = activeTab === 'morning' ? morningRoutine : nightRoutine
  const totalItems = routine.length
  const completedCount = routine.filter(item => completedItems.has(`${activeTab}-${item.id}`)).length
  const progress = totalItems > 0 ? (completedCount / totalItems) * 100 : 0

  const loadProgress = useCallback(async () => {
    const deviceId = getDeviceId()
    if (!deviceId) return

    try {
      const res = await fetch(`/api/progress?device_id=${deviceId}&date=${today}`)
      const json = await res.json()
      if (json.data) {
        const items = new Set<string>()
        for (const row of json.data) {
          items.add(`${row.routine_type}-${row.item_id}`)
        }
        setCompletedItems(items)
      }
    } catch {
      const stored = localStorage.getItem(`ummah_progress_${today}`)
      if (stored) {
        setCompletedItems(new Set(JSON.parse(stored)))
      }
    } finally {
      setLoading(false)
    }
  }, [today])

  useEffect(() => {
    loadProgress()
  }, [loadProgress])

  async function toggleItem(item: RoutineItem) {
    const key = `${activeTab}-${item.id}`
    const isCompleted = completedItems.has(key)
    const deviceId = getDeviceId()

    const next = new Set(completedItems)
    if (isCompleted) {
      next.delete(key)
    } else {
      next.add(key)
    }
    setCompletedItems(next)
    setSaving(key)

    localStorage.setItem(`ummah_progress_${today}`, JSON.stringify([...next]))

    try {
      if (isCompleted) {
        await fetch('/api/progress', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ device_id: deviceId, date: today, routine_type: activeTab, item_id: item.id }),
        })
      } else {
        await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ device_id: deviceId, date: today, routine_type: activeTab, item_id: item.id }),
        })
      }
    } catch {
      // localStorage has the data
    } finally {
      setSaving(null)
    }
  }

  function toggleExpand(itemId: string) {
    const next = new Set(expandedItems)
    if (next.has(itemId)) {
      next.delete(itemId)
    } else {
      next.add(itemId)
    }
    setExpandedItems(next)
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-8">
      {/* Header */}
      <div className="mb-5">
        <p className="text-sm text-gold-500 font-medium">As-salamu alaykum</p>
        <h1 className="font-arabic text-2xl font-bold text-emerald-950 dark:text-cream-50">
          Rutina Ditore
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        <button
          onClick={() => setActiveTab('morning')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
            activeTab === 'morning'
              ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-lg shadow-amber-400/20'
              : 'bg-cream-100 dark:bg-night-800 text-emerald-950/60 dark:text-cream-200/60'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
          Mengjesi
        </button>
        <button
          onClick={() => setActiveTab('night')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
            activeTab === 'night'
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20'
              : 'bg-cream-100 dark:bg-night-800 text-emerald-950/60 dark:text-cream-200/60'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          Nata
        </button>
      </div>

      {/* Progress bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-emerald-950/70 dark:text-cream-200/70">
            Progresi
          </span>
          <span className="text-sm font-bold text-gold-500">
            {completedCount}/{totalItems}
          </span>
        </div>
        <div className="h-3 bg-cream-100 dark:bg-night-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ease-out ${
              activeTab === 'morning'
                ? 'bg-gradient-to-r from-amber-400 to-orange-400'
                : 'bg-gradient-to-r from-indigo-500 to-purple-600'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
        {completedCount === totalItems && totalItems > 0 && (
          <p className="text-sm text-center mt-2 text-gold-500 font-semibold">
            Masha&apos;Allah! E perfundove rutinen e {activeTab === 'morning' ? 'mengjesit' : 'nates'}!
          </p>
        )}
      </div>

      {/* Items */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-3">
          {routine.map((item, idx) => {
            const key = `${activeTab}-${item.id}`
            const isCompleted = completedItems.has(key)
            const isExpanded = expandedItems.has(item.id)
            const isSaving = saving === key

            return (
              <div
                key={item.id}
                className={`card-animate rounded-2xl overflow-hidden border transition-all ${
                  isCompleted
                    ? 'bg-emerald-800/10 dark:bg-emerald-900/20 border-emerald-700/20'
                    : 'bg-white dark:bg-night-800 border-gold-500/10'
                }`}
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                {/* Main row */}
                <div className="flex items-start gap-3 p-4">
                  <button
                    onClick={() => toggleItem(item)}
                    disabled={isSaving}
                    className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isCompleted
                        ? 'bg-emerald-700 border-emerald-700 text-white'
                        : 'border-gold-500/40 hover:border-gold-500'
                    } ${isSaving ? 'opacity-50' : ''}`}
                  >
                    {isCompleted && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    <button onClick={() => toggleExpand(item.id)} className="w-full text-left">
                      <h3 className={`font-semibold text-sm leading-snug ${
                        isCompleted
                          ? 'text-emerald-700 dark:text-emerald-400 line-through opacity-70'
                          : 'text-emerald-950 dark:text-cream-50'
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-emerald-950/40 dark:text-cream-200/40 mt-0.5">
                        {item.source}
                      </p>
                    </button>
                  </div>

                  <button onClick={() => toggleExpand(item.id)} className="flex-shrink-0 mt-0.5 text-gold-500/60 hover:text-gold-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-gold-500/5">
                    {item.arabic && (
                      <div className="mt-4 mb-3 p-4 rounded-xl bg-cream-50 dark:bg-night-900/50">
                        <p className="font-arabic text-right text-xl leading-[2.2] text-emerald-950 dark:text-cream-50" dir="rtl">
                          {item.arabic}
                        </p>
                      </div>
                    )}

                    {item.ayahs && item.ayahs.length > 0 && (
                      <div className="mt-4 space-y-4">
                        {item.ayahs.map((ayah) => (
                          <div key={ayah.num} className="p-3 rounded-xl bg-cream-50 dark:bg-night-900/50">
                            <div className="flex items-start gap-2 mb-2">
                              <span className="verse-hexagon flex-shrink-0 text-[10px]">{ayah.num}</span>
                              <p className="font-arabic text-right text-lg leading-[2] text-emerald-950 dark:text-cream-50 flex-1" dir="rtl">
                                {ayah.arabic}
                              </p>
                            </div>
                            <p className="font-reading text-sm text-emerald-950/70 dark:text-cream-200/70 italic mt-2">
                              {ayah.transliteration}
                            </p>
                            <p className="text-xs text-emerald-950/50 dark:text-cream-200/50 mt-1">
                              {ayah.translation}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.transliteration && (
                      <p className="font-reading text-sm text-emerald-950/70 dark:text-cream-200/70 italic mt-3">
                        {item.transliteration}
                      </p>
                    )}

                    {item.translation && (
                      <p className="text-sm text-emerald-950/60 dark:text-cream-200/60 mt-2">
                        {item.translation}
                      </p>
                    )}

                    {item.note && (
                      <div className="mt-3 flex items-start gap-2 p-2.5 rounded-lg bg-gold-500/5 dark:bg-gold-500/10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500 mt-0.5 flex-shrink-0">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                        <p className="text-xs text-gold-600 dark:text-gold-400">{item.note}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
