'use client'

interface ReadCheckboxProps {
  checked: boolean
  onToggle: () => void
}

export default function ReadCheckbox({ checked, onToggle }: ReadCheckboxProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={checked ? 'Hiq si te lexuar' : 'Sheno si te lexuar'}
      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200
        ${checked
          ? 'bg-emerald-600 border-emerald-600 dark:bg-gold-500 dark:border-gold-500 scale-110'
          : 'border-emerald-950/20 dark:border-cream-200/20 hover:border-emerald-600 dark:hover:border-gold-500'
        }`}
    >
      {checked && (
        <svg className="w-3.5 h-3.5 text-white dark:text-night-900" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      )}
    </button>
  )
}
