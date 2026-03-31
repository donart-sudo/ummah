import Link from 'next/link'
import type { Dua } from '@/types'
import CopyButton from './CopyButton'

interface DuaCardProps {
  dua: Dua
  index: number
}

function Badge({ label, variant }: { label: string; variant: 'source' | 'status' }) {
  const styles =
    variant === 'source'
      ? 'bg-emerald-950/5 text-emerald-800/70 dark:bg-gold-500/10 dark:text-gold-400/70'
      : label === 'Sahih'
        ? 'bg-emerald-950/10 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-400'
        : label === 'Hasan'
          ? 'bg-gold-500/10 text-gold-700 dark:bg-gold-500/15 dark:text-gold-400'
          : label === 'Quranic'
            ? 'bg-emerald-950/10 text-emerald-950 dark:bg-gold-500/15 dark:text-gold-300'
            : 'bg-cream-200 text-emerald-800/60 dark:bg-night-700 dark:text-cream-200/60'

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium uppercase tracking-wider ${styles}`}>
      {label}
    </span>
  )
}

export default function DuaCard({ dua, index }: DuaCardProps) {
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
            <Link
              href={`/dua/${dua.id}`}
              className="font-arabic text-lg font-bold text-emerald-950 dark:text-cream-50 hover:text-gold-600 dark:hover:text-gold-400 leading-snug"
            >
              {dua.title}
            </Link>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              <Badge label={dua.source} variant="source" />
              {dua.status && <Badge label={dua.status} variant="status" />}
            </div>
          </div>
          <CopyButton dua={dua} />
        </div>

        {/* Arabic */}
        {dua.arabic && (
          <div className="mb-3 p-3 rounded-xl bg-cream-50 dark:bg-night-900/50">
            <p className="font-arabic text-right text-xl leading-[2.2] text-emerald-950 dark:text-cream-50" dir="rtl">
              {dua.arabic}
            </p>
          </div>
        )}

        {/* Transliteration */}
        {dua.transliteration && (
          <p className="font-reading italic text-[17px] text-emerald-800 dark:text-gold-400 leading-[1.8] tracking-wide mb-3">
            {dua.transliteration}
          </p>
        )}

        {/* Arabesque divider */}
        {dua.transliteration && dua.translation && (
          <div className="arabesque-divider my-3 opacity-30" />
        )}

        {/* Translation */}
        {dua.translation && (
          <p className="text-sm text-emerald-950/70 dark:text-cream-200/70 leading-relaxed">
            {dua.translation}
          </p>
        )}

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
