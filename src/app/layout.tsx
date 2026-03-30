import type { Metadata, Viewport } from 'next'
import { Amiri, Outfit } from 'next/font/google'
import './globals.css'
import BottomNav from '@/components/layout/BottomNav'
import ServiceWorkerRegistrar from '@/components/ServiceWorkerRegistrar'

const amiri = Amiri({
  subsets: ['latin', 'arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ummah — Dua & Prayer Companion',
  description: 'Your daily Islamic dua and prayer companion with authentic supplications from Quran and Sunnah.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Ummah',
  },
  icons: {
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1A1A2E',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${amiri.variable} ${outfit.variable}`}>
      <body className="font-body bg-cream-50 dark:bg-night-900 text-emerald-950 dark:text-cream-50 antialiased min-h-screen">
        <ServiceWorkerRegistrar />
        <main className="pb-20">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  )
}
