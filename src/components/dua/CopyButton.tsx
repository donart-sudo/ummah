'use client'

import { useState, useCallback } from 'react'
import type { Dua } from '@/types'

interface CopyButtonProps {
  dua: Dua
}

export default function CopyButton({ dua }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const [pulsing, setPulsing] = useState(false)

  const buildCopyText = useCallback(() => {
    const parts: string[] = [dua.title]

    if (dua.transliteration) {
      parts.push('', dua.transliteration)
    }

    if (dua.translation) {
      parts.push('', dua.translation)
    }

    if (dua.ayahs && dua.ayahs.length > 0) {
      parts.push('')
      dua.ayahs.forEach((ayah) => {
        parts.push(`${ayah.num}. ${ayah.transliteration}`)
        parts.push(`   ${ayah.translation}`)
      })
    }

    if (dua.content && dua.content.length > 0) {
      parts.push('')
      dua.content.forEach((line, i) => {
        parts.push(`${i + 1}. ${line}`)
      })
    }

    parts.push('', `Burimi: ${dua.source}`)

    return parts.join('\n')
  }, [dua])

  const handleCopy = async () => {
    const text = buildCopyText()

    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    setCopied(true)
    setPulsing(true)

    setTimeout(() => setPulsing(false), 300)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className={`w-10 h-10 rounded-xl flex items-center justify-center
        bg-emerald-950/5 dark:bg-gold-500/10
        hover:bg-emerald-950/10 dark:hover:bg-gold-500/20
        ${pulsing ? 'copy-pulse' : ''}`}
      aria-label={copied ? 'U kopjua' : 'Kopjo duane'}
    >
      {copied ? (
        <svg
          className="w-4 h-4 text-emerald-800/50 dark:text-gold-400/50"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      ) : (
        <svg
          className="w-4 h-4 text-emerald-800/50 dark:text-gold-400/50"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
          />
        </svg>
      )}
    </button>
  )
}
