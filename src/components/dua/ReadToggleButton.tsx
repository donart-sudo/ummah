'use client'

import { useReadingChecklist } from '@/hooks/useReadingChecklist'

export default function ReadToggleButton({ duaId }: { duaId: number }) {
  const { isRead, toggleRead } = useReadingChecklist()
  const checked = isRead(duaId)

  return (
    <button
      onClick={() => toggleRead(duaId)}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
        ${checked
          ? 'bg-emerald-600 dark:bg-gold-500 text-white dark:text-night-900'
          : 'bg-emerald-950/5 dark:bg-cream-50/5 text-emerald-800 dark:text-cream-200 hover:bg-emerald-950/10 dark:hover:bg-cream-50/10'
        }`}
    >
      {checked ? (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          E lexuar
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <circle cx="12" cy="12" r="9" />
          </svg>
          Shëno si të lexuar
        </>
      )}
    </button>
  )
}
