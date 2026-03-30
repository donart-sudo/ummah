import { categories, getDuasByCategory } from '@/lib/data'
import Header from '@/components/layout/Header'
import CategoryGrid from '@/components/home/CategoryGrid'

export default function HomePage() {
  const duaCounts: Record<string, number> = {}
  for (const cat of categories) {
    duaCounts[cat.id] = getDuasByCategory(cat.id).length
  }

  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto px-4 py-6">
        <section className="mb-6">
          <h2 className="font-amiri text-lg text-emerald-950/80 dark:text-cream-100/80 mb-1">
            As-salamu alaykum
          </h2>
          <p className="text-sm text-emerald-950/50 dark:text-cream-200/50">
            Choose a category to begin your dhikr and dua.
          </p>
        </section>

        <CategoryGrid categories={categories} duaCounts={duaCounts} />
      </div>
    </>
  )
}
