'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export default function SettingsPage() {
  const [isDark, setIsDark] = useState(true)
  const [notifPermission, setNotifPermission] = useState<NotificationPermission>('default')
  const [morningTime, setMorningTime] = useState('06:00')
  const [eveningTime, setEveningTime] = useState('21:00')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const dark = document.documentElement.classList.contains('dark')
    setIsDark(dark)

    if ('Notification' in window) {
      setNotifPermission(Notification.permission)
    }
  }, [])

  const toggleDarkMode = () => {
    const newDark = !isDark
    setIsDark(newDark)
    if (newDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const requestNotifPermission = async () => {
    if (!('Notification' in window)) return
    const permission = await Notification.requestPermission()
    setNotifPermission(permission)
    if (permission === 'granted') {
      await subscribeToPush()
    }
  }

  const subscribeToPush = async () => {
    try {
      const registration = await navigator.serviceWorker.ready
      const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      if (!vapidKey) return

      let subscription = await registration.pushManager.getSubscription()
      if (!subscription) {
        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapidKey) as BufferSource,
        })
      }

      const subJson = subscription.toJSON()
      await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          endpoint: subJson.endpoint,
          keys: { p256dh: subJson.keys?.p256dh, auth: subJson.keys?.auth },
          morningTime,
          eveningTime,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      })
    } catch (err) {
      console.error('Push subscription failed:', err)
    }
  }

  const handleSaveNotifications = async () => {
    setSaving(true)
    try {
      await subscribeToPush()
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-950/5 dark:bg-cream-50/5 hover:bg-emerald-950/10 dark:hover:bg-cream-50/10"
          aria-label="Go back"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <h1 className="font-amiri text-2xl font-bold text-emerald-950 dark:text-cream-50">
          Cilesimet
        </h1>
      </div>

      {/* Dark Mode */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-emerald-950/40 dark:text-cream-50/40 uppercase tracking-wider mb-3">
          Pamja
        </h2>
        <div className="bg-white/60 dark:bg-night-800/60 rounded-xl p-4 border border-gold-500/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-emerald-950 dark:text-cream-50">Tema e erret</p>
              <p className="text-xs text-emerald-950/50 dark:text-cream-200/50 mt-0.5">
                {isDark ? 'Tema e erret aktive' : 'Tema e ndricuar aktive'}
              </p>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`relative w-12 h-7 rounded-full transition-colors ${
                isDark ? 'bg-gold-500' : 'bg-emerald-950/20'
              }`}
              aria-label="Toggle dark mode"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-transform ${
                  isDark ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-emerald-950/40 dark:text-cream-50/40 uppercase tracking-wider mb-3">
          Njoftimet
        </h2>
        <div className="bg-white/60 dark:bg-night-800/60 rounded-xl p-4 border border-gold-500/10 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-emerald-950 dark:text-cream-50">Aktivizo njoftimet</p>
              <p className="text-xs text-emerald-950/50 dark:text-cream-200/50 mt-0.5">
                Statusi: {notifPermission === 'granted' ? 'i aktivizuar' : notifPermission === 'denied' ? 'i bllokuar' : 'ne pritje'}
              </p>
            </div>
            <button
              onClick={requestNotifPermission}
              disabled={notifPermission === 'granted'}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                notifPermission === 'granted'
                  ? 'bg-emerald-800/10 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-700 cursor-default'
                  : notifPermission === 'denied'
                  ? 'bg-red-500/10 text-red-600 cursor-not-allowed'
                  : 'bg-gold-500/10 text-gold-600 dark:text-gold-400 hover:bg-gold-500/20'
              }`}
            >
              {notifPermission === 'granted' ? 'Aktiv' : notifPermission === 'denied' ? 'Bllokuar' : 'Aktivizo'}
            </button>
          </div>

          {notifPermission === 'granted' && (
            <>
              <div className="border-t border-gold-500/10 pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="morningTime" className="text-sm text-emerald-950/70 dark:text-cream-200/70">
                    Adhkaret e mengjesit
                  </label>
                  <input
                    type="time"
                    id="morningTime"
                    value={morningTime}
                    onChange={(e) => setMorningTime(e.target.value)}
                    className="bg-emerald-950/5 dark:bg-cream-50/5 border border-gold-500/10 rounded-lg px-3 py-1.5 text-sm text-emerald-950 dark:text-cream-50"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="eveningTime" className="text-sm text-emerald-950/70 dark:text-cream-200/70">
                    Adhkaret e mbremjes
                  </label>
                  <input
                    type="time"
                    id="eveningTime"
                    value={eveningTime}
                    onChange={(e) => setEveningTime(e.target.value)}
                    className="bg-emerald-950/5 dark:bg-cream-50/5 border border-gold-500/10 rounded-lg px-3 py-1.5 text-sm text-emerald-950 dark:text-cream-50"
                  />
                </div>
              </div>
              <button
                onClick={handleSaveNotifications}
                disabled={saving}
                className="w-full py-2.5 rounded-lg bg-gold-500 text-night-900 font-semibold text-sm hover:bg-gold-400 disabled:opacity-50 transition-colors"
              >
                {saving ? 'Duke ruajtur...' : 'Ruaj oret e njoftimeve'}
              </button>
            </>
          )}
        </div>
      </section>

      {/* About */}
      <section>
        <h2 className="text-sm font-semibold text-emerald-950/40 dark:text-cream-50/40 uppercase tracking-wider mb-3">
          Rreth
        </h2>
        <div className="bg-white/60 dark:bg-night-800/60 rounded-xl p-4 border border-gold-500/10 space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-emerald-950/70 dark:text-cream-200/70">Aplikacioni</span>
            <span className="text-sm font-medium text-emerald-950 dark:text-cream-50">Ummah</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-emerald-950/70 dark:text-cream-200/70">Versioni</span>
            <span className="text-sm font-medium text-emerald-950 dark:text-cream-50">2.0.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-emerald-950/70 dark:text-cream-200/70">Pershkrimi</span>
            <span className="text-sm text-emerald-950/60 dark:text-cream-200/60 text-right max-w-[200px]">
              Lutje &amp; Dua Islame
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
