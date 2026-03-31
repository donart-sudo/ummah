'use client'

import { useState, useCallback, useEffect } from 'react'

function getTodayKey(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Tirane' }) // Kosovo timezone, "2026-03-31"
}

function getStorageKey(): string {
  return `ummah-read-${getTodayKey()}`
}

function loadReadIds(): Set<number> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem(getStorageKey())
    if (!raw) return new Set()
    return new Set(JSON.parse(raw) as number[])
  } catch {
    return new Set()
  }
}

function saveReadIds(ids: Set<number>): void {
  localStorage.setItem(getStorageKey(), JSON.stringify([...ids]))
}

/** Clean up old days' entries to avoid localStorage bloat */
function cleanupOldEntries(): void {
  const todayKey = getStorageKey()
  const keysToRemove: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && key.startsWith('ummah-read-') && key !== todayKey) {
      keysToRemove.push(key)
    }
  }
  keysToRemove.forEach((k) => localStorage.removeItem(k))
}

export function useReadingChecklist() {
  const [readIds, setReadIds] = useState<Set<number>>(new Set())

  useEffect(() => {
    setReadIds(loadReadIds())
    cleanupOldEntries()
  }, [])

  const toggleRead = useCallback((duaId: number) => {
    setReadIds((prev) => {
      const next = new Set(prev)
      if (next.has(duaId)) {
        next.delete(duaId)
      } else {
        next.add(duaId)
      }
      saveReadIds(next)
      return next
    })
  }, [])

  const isRead = useCallback((duaId: number) => readIds.has(duaId), [readIds])

  return { readIds, toggleRead, isRead, readCount: readIds.size }
}
