'use client'

import { useState } from 'react'
import type { Dua } from '@/types'
import CopyButton from './CopyButton'

interface SurahCardProps {
  dua: Dua
  index: number
}

export default function SurahCard({ dua, index }: SurahCardProps) {
  const [expanded, setExpanded] = useState(false)

  const ayahs = dua.ayahs || []
  const visibleAyahs = expanded ? ayahs : ayahs.slice(0, 3)
  const hasMore = ayahs.length > 3

  return (
    <div
      className="card-animate w-full bg-white dark:bg-night-800 rounded-2xl border border-emerald-950/5 dark:border-gold-500/10 overflow-hidden"
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
            <div className="flex items-center gap-2 mt-1.5 text-xs text-emerald-950/50 dark:text-cream-200/50">
              <span>{ayahs.length} verses</span>
              <span className="w-1 h-1 rounded-full bg-current opacity-30" />
              <span>{dua.source}</span>
            </div>
          </div>
          <CopyButton dua={dua} />
        </div>

        {/* Translation summary */}
        {dua.translation && (
          <p className="text-sm text-emerald-950/70 dark:text-cream-200/70 leading-relaxed mb-4">
            {dua.translation}
          </p>
        )}

        {/* Verses */}
        <div className="space-y-3">
          {visibleAyahs.map((ayah) => (
            <div key={ayah.num} className="flex gap-3">
              <div className="verse-hexagon flex-shrink-0 mt-0.5">
                {ayah.num}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-amiri italic text-sm text-emerald-800 dark:text-gold-400 leading-relaxed">
                  {ayah.transliteration}
                </p>
                <p className="text-xs text-emerald-950/60 dark:text-cream-200/60 leading-relaxed mt-1">
                  {ayah.translation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse button */}
        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full py-2.5 mt-4 rounded-xl border border-dashed border-emerald-950/10 dark:border-gold-500/20
              text-xs font-medium text-emerald-800/60 dark:text-gold-400/60
              hover:bg-emerald-950/5 dark:hover:bg-gold-500/10
              flex items-center justify-center gap-1.5"
          >
            <span>{expanded ? 'Show less' : `Show all ${ayahs.length} verses`}</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
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
