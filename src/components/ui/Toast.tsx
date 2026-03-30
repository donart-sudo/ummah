'use client'

interface ToastProps {
  message: string
  show: boolean
}

export default function Toast({ message, show }: ToastProps) {
  return (
    <div
      className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-emerald-950 dark:bg-gold-500 text-white dark:text-night-900 px-5 py-2.5 rounded-xl shadow-xl text-sm font-medium transition-all duration-300 ${
        show
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      {message}
    </div>
  )
}
