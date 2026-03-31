import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Arabic, Outfit, Lora } from 'next/font/google'
import './globals.css'
import BottomNav from '@/components/layout/BottomNav'
import ServiceWorkerRegistrar from '@/components/ServiceWorkerRegistrar'

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ummah — Lutje & Dua Islame',
  description: 'Shoqeruesi yt i perditshgem i lutjeve dhe duave islame me transliterim dhe perkthim.',
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
    <html lang="sq" className={`dark ${notoSansArabic.variable} ${outfit.variable} ${lora.variable}`}>
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
