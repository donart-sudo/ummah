import { notFound } from 'next/navigation'
import { getCategoryById, getDuasByCategory } from '@/lib/data'
import CategoryContent from './CategoryContent'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = getCategoryById(slug)

  if (!category) {
    notFound()
  }

  const duas = getDuasByCategory(slug)

  return (
    <div className="max-w-lg mx-auto px-4">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-40 bg-cream-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 flex items-center gap-3 border-b border-gold-500/10">
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-950/5 dark:bg-cream-50/5 hover:bg-emerald-950/10 dark:hover:bg-cream-50/10"
          aria-label="Go back"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div>
          <h1 className="font-amiri text-xl font-bold text-emerald-950 dark:text-cream-50">
            {category.label}
          </h1>
        </div>
      </div>

      <CategoryContent
        duas={duas}
        categoryLabel={category.label}
        categoryDescription={category.description}
      />
    </div>
  )
}
