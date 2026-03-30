import { notFound } from 'next/navigation'
import { getDuaById } from '@/lib/data'
import Link from 'next/link'
import CopyButton from '@/components/dua/CopyButton'

interface Props {
  params: Promise<{ id: string }>
}

export default async function DuaPage({ params }: Props) {
  const { id } = await params
  const dua = getDuaById(Number(id))

  if (!dua) {
    notFound()
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-950/5 dark:bg-cream-50/5 hover:bg-emerald-950/10 dark:hover:bg-cream-50/10"
          aria-label="Go back"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>

        <CopyButton dua={dua} />
      </div>

      {/* Title */}
      <h1 className="font-amiri text-2xl font-bold text-emerald-950 dark:text-cream-50 mb-6">
        {dua.title}
      </h1>

      {/* Surah type: render ayahs */}
      {dua.type === 'surah' && dua.ayahs && (
        <div className="space-y-6">
          {dua.ayahs.map((ayah) => (
            <div key={ayah.num} className="flex gap-3">
              <div className="verse-hexagon flex-shrink-0 mt-1">
                {ayah.num}
              </div>
              <div className="flex-1 space-y-2">
                <p className="font-reading italic text-xl text-emerald-800 dark:text-gold-400 leading-[1.8] tracking-wide">
                  {ayah.transliteration}
                </p>
                <p className="text-sm text-emerald-950/60 dark:text-cream-200/60 leading-relaxed">
                  {ayah.translation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Laylatul type: render content prayers */}
      {dua.type === 'laylatul' && dua.content && (
        <div className="space-y-4">
          {dua.content.map((prayer, index) => (
            <div key={index} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center text-xs font-semibold">
                {index + 1}
              </span>
              <p className="text-base text-emerald-950/70 dark:text-cream-200/70 leading-relaxed flex-1">
                {prayer}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Standard type: transliteration + translation */}
      {dua.type !== 'surah' && dua.type !== 'laylatul' && (
        <>
          {dua.transliteration && (
            <p className="font-reading italic text-xl text-emerald-800 dark:text-gold-400 leading-[1.8] tracking-wide mb-6">
              {dua.transliteration}
            </p>
          )}

          {/* Arabesque divider */}
          <div className="arabesque-divider mx-4 my-6" />

          {dua.translation && (
            <p className="text-base text-emerald-950/70 dark:text-cream-200/70 leading-relaxed mb-6">
              {dua.translation}
            </p>
          )}
        </>
      )}

      {/* Divider before metadata */}
      <div className="arabesque-divider mx-4 my-8" />

      {/* Source & Status */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-medium text-emerald-950/50 dark:text-cream-200/50 bg-emerald-950/5 dark:bg-cream-50/5 px-3 py-1 rounded-full">
          {dua.source}
        </span>
        {dua.status && (
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              dua.status === 'Sahih'
                ? 'bg-emerald-800/10 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-700'
                : dua.status === 'Quranic'
                ? 'bg-gold-500/10 text-gold-600 dark:bg-gold-500/20 dark:text-gold-400'
                : dua.status === 'Hasan'
                ? 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400'
                : 'bg-emerald-950/5 text-emerald-950/50 dark:bg-cream-50/5 dark:text-cream-200/50'
            }`}
          >
            {dua.status}
          </span>
        )}
      </div>

      {/* Note */}
      {dua.note && (
        <div className="bg-gold-500/5 dark:bg-gold-500/10 border border-gold-500/10 rounded-xl p-4">
          <p className="text-sm text-emerald-950/60 dark:text-cream-200/60 leading-relaxed">
            {dua.note}
          </p>
        </div>
      )}
    </div>
  )
}
