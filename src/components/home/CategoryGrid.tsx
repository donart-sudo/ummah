import CategoryCard from './CategoryCard'

interface CategoryGridProps {
  categories: {
    id: string
    label: string
    description: string
    icon: string
  }[]
  duaCounts: Record<string, number>
}

export default function CategoryGrid({ categories, duaCounts }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {categories.map((category, index) => (
        <CategoryCard
          key={category.id}
          category={category}
          count={duaCounts[category.id] || 0}
          index={index}
        />
      ))}
    </div>
  )
}
