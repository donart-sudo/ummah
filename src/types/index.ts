export interface Category {
  id: string
  label: string
  description: string
  icon: string
}

export interface Ayah {
  num: number
  transliteration: string
  translation: string
}

export interface Dua {
  id: number
  title: string
  category: string
  tags: string[]
  type?: 'standard' | 'surah' | 'laylatul'
  transliteration?: string
  translation?: string
  source: string
  status?: 'Sahih' | 'Hasan' | 'Quranic' | 'Dua'
  note?: string
  ayahs?: Ayah[]
  content?: string[]
}

export interface RoutineItem {
  id: string
  title: string
  transliteration: string
  translation: string
  source: string
  note?: string
  ayahs?: Ayah[]
}

export interface DailyProgress {
  date: string
  routine_type: 'morning' | 'night'
  completed_items: string[]
}
