import { categories, getDuasByCategory } from '@/lib/data'
import CategoryGrid from '@/components/home/CategoryGrid'

export default function DuasPage() {
  const duaCounts: Record<string, number> = {}
  for (const cat of categories) {
    duaCounts[cat.id] = getDuasByCategory(cat.id).length
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-8">
      <h1 className="font-arabic text-2xl font-bold text-emerald-950 dark:text-cream-50 mb-1">
        Duat & Suret
      </h1>
      <p className="text-sm text-emerald-950/50 dark:text-cream-200/50 mb-6">
        Koleksioni i duave dhe sureve per raste te ndryshme
      </p>
      <CategoryGrid categories={categories} duaCounts={duaCounts} />
    </div>
  )
}
