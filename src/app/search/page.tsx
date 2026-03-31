'use client'

import { useState } from 'react'
import { searchDuas } from '@/lib/data'
import SearchBar from '@/components/dua/SearchBar'
import DuaCard from '@/components/dua/DuaCard'
import SurahCard from '@/components/dua/SurahCard'
import LaylatulQadrCard from '@/components/dua/LaylatulQadrCard'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const results = searchDuas(query)

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <h1 className="font-arabic text-2xl font-bold text-emerald-950 dark:text-cream-50 mb-4">
        Kerko
      </h1>

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Kerko dua, sure dhe lutje..."
        autoFocus
      />

      <div className="mt-4 space-y-3">
        {!query.trim() && (
          <div className="text-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-emerald-950/20 dark:text-cream-50/20 mb-4">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <p className="text-sm text-emerald-950/40 dark:text-cream-50/40">
              Kerko dua, sure dhe lutje
            </p>
          </div>
        )}

        {query.trim() && results.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm text-emerald-950/40 dark:text-cream-50/40">
              Nuk u gjet asnje dua qe perputhet me kerkimin tuaj.
            </p>
          </div>
        )}

        {results.map((dua, index) => {
          if (dua.type === 'surah') {
            return <SurahCard key={dua.id} dua={dua} index={index} />
          }
          if (dua.type === 'laylatul') {
            return <LaylatulQadrCard key={dua.id} dua={dua} index={index} />
          }
          return <DuaCard key={dua.id} dua={dua} index={index} />
        })}
      </div>
    </div>
  )
}
