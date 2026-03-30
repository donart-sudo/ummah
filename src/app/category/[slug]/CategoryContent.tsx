'use client'

import { useState } from 'react'
import type { Dua } from '@/types'
import SearchBar from '@/components/dua/SearchBar'
import DuaCard from '@/components/dua/DuaCard'
import SurahCard from '@/components/dua/SurahCard'
import LaylatulQadrCard from '@/components/dua/LaylatulQadrCard'

interface Props {
  duas: Dua[]
  categoryLabel: string
  categoryDescription: string
}

export default function CategoryContent({ duas, categoryLabel, categoryDescription }: Props) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDuas = duas.filter((dua) => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    const fields = [dua.title, dua.transliteration, dua.translation, dua.source, dua.note]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
    return fields.includes(q)
  })

  return (
    <div className="py-4">
      <p className="text-sm text-emerald-950/50 dark:text-cream-200/50 mb-4">
        {categoryDescription}
      </p>

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder={`Search in ${categoryLabel}...`}
      />

      <div className="mt-4 space-y-3">
        {filteredDuas.length === 0 && searchQuery.trim() ? (
          <div className="text-center py-12">
            <p className="text-emerald-950/40 dark:text-cream-50/40 text-sm">
              No duas found matching your search.
            </p>
          </div>
        ) : (
          filteredDuas.map((dua, index) => {
            if (dua.type === 'surah') {
              return <SurahCard key={dua.id} dua={dua} index={index} />
            }
            if (dua.type === 'laylatul') {
              return <LaylatulQadrCard key={dua.id} dua={dua} index={index} />
            }
            return <DuaCard key={dua.id} dua={dua} index={index} />
          })
        )}
      </div>
    </div>
  )
}
