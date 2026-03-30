export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Islamic geometric pattern overlay */}
      <div className="islamic-pattern absolute inset-0 pointer-events-none" />

      {/* Top gold gradient border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative text-center py-10 px-4">
        {/* Bismillah */}
        <div className="font-amiri text-gold-500 text-3xl mb-1">
          &#65010;
        </div>
        <p className="text-gold-500/80 text-sm italic font-amiri mb-6">
          Bismillahir Rahmanir Rahim
        </p>

        {/* Title */}
        <h1 className="gold-shimmer font-amiri text-5xl font-bold mb-3">
          Ummah
        </h1>

        {/* Subtitle */}
        <p className="text-emerald-950/60 dark:text-cream-50/60 text-xs tracking-widest uppercase font-medium">
          Dua &amp; Prayer Companion
        </p>
      </div>

      {/* Arabesque divider */}
      <div className="arabesque-divider mx-8" />
    </header>
  )
}
