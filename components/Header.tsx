'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-300">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 text-white text-lg font-bold">
            2
          </span>
          <span className="text-white text-sm sm:text-base font-semibold tracking-[0.2em]">
            x MICRO VENTURES
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="#about"
            className="text-white text-xs sm:text-sm font-semibold tracking-[0.12em] hover:opacity-80 transition-opacity duration-300"
          >
            ABOUT US
          </a>
          <Link
            href="/apply"
            className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-[0.14em] text-white border border-white/90 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            APPLY NOW
          </Link>
        </div>
      </nav>
    </header>
  )
}
