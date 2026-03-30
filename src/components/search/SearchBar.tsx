'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function SearchBar({ onSearch, placeholder = 'Search duas...' }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const debouncedSearch = useCallback(
    (value: string) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
      debounceRef.current = setTimeout(() => {
        onSearch(value)
      }, 300)
    },
    [onSearch]
  )

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    debouncedSearch(value)
  }

  const handleClear = () => {
    setQuery('')
    onSearch('')
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
  }

  return (
    <div className="sticky top-0 z-30 backdrop-blur-lg bg-cream-50/80 dark:bg-night-900/80 pb-3 pt-3 -mx-1 px-1">
      <div className="relative">
        {/* Search icon */}
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-800/40 dark:text-gold-400/40 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2.5 rounded-xl
            bg-white dark:bg-night-800
            border border-emerald-950/10 dark:border-gold-500/15
            text-sm text-emerald-950 dark:text-cream-50
            placeholder:text-emerald-950/30 dark:placeholder:text-cream-200/30
            focus:outline-none focus:ring-2 focus:ring-gold-500/40
            font-body"
        />

        {/* Clear button */}
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg
              flex items-center justify-center
              bg-emerald-950/5 dark:bg-gold-500/10
              hover:bg-emerald-950/10 dark:hover:bg-gold-500/20"
            aria-label="Clear search"
          >
            <svg
              className="w-3 h-3 text-emerald-800/50 dark:text-gold-400/50"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
