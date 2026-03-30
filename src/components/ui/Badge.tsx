interface BadgeProps {
  text: string
  variant: 'sahih' | 'hasan' | 'quranic' | 'dua' | 'source'
}

const variantStyles: Record<BadgeProps['variant'], string> = {
  sahih: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400',
  hasan: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400',
  quranic: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400',
  dua: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400',
  source: 'bg-emerald-950/5 dark:bg-gold-500/10 text-emerald-800 dark:text-gold-400',
}

export default function Badge({ text, variant }: BadgeProps) {
  return (
    <span
      className={`px-2 py-0.5 rounded-md text-[10px] font-medium uppercase tracking-wider ${variantStyles[variant]}`}
    >
      {text}
    </span>
  )
}
