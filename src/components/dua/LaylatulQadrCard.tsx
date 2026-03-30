import type { Dua } from '@/types'
import CopyButton from './CopyButton'

interface LaylatulQadrCardProps {
  dua: Dua
  index: number
}

export default function LaylatulQadrCard({ dua, index }: LaylatulQadrCardProps) {
  const prayers = dua.content || []

  return (
    <div
      className="card-animate bg-white dark:bg-night-800 rounded-2xl border border-emerald-950/5 dark:border-gold-500/10 overflow-hidden"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Top accent */}
      <div className="h-0.5 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-amiri text-lg font-bold text-emerald-950 dark:text-cream-50 leading-snug">
              {dua.title}
            </h3>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium uppercase tracking-wider bg-purple-500/10 text-purple-700 dark:bg-purple-400/15 dark:text-purple-300">
                Lutje Shqiptare
              </span>
              <span className="text-xs text-emerald-950/50 dark:text-cream-200/50">
                {prayers.length} lutje
              </span>
            </div>
          </div>
          <CopyButton dua={dua} />
        </div>

        {/* Scrollable prayer list */}
        <div className="max-h-[500px] overflow-y-auto space-y-2.5 pr-1">
          {prayers.map((prayer, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                bg-emerald-950/5 dark:bg-gold-500/10
                text-[10px] font-semibold text-emerald-800/60 dark:text-gold-400/60"
              >
                {i + 1}
              </div>
              <p className="text-sm text-emerald-950/80 dark:text-cream-200/80 leading-relaxed flex-1">
                {prayer}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        {dua.note && (
          <div className="flex items-start gap-2 mt-3 pt-3 border-t border-emerald-950/5 dark:border-gold-500/10">
            <svg
              className="w-3.5 h-3.5 mt-0.5 text-gold-600 dark:text-gold-400/60 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xs italic text-gold-600 dark:text-gold-400/60 leading-relaxed">
              {dua.note}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
