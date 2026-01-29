'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-300">
          <Image
            src="/2x-logo.png"
            alt="2x Micro Ventures"
            width={180}
            height={48}
            className="h-10 sm:h-12 w-auto brightness-0 invert"
            priority
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#about"
            className="text-white text-xs sm:text-sm font-medium tracking-[0.14em] hover:opacity-80 transition-opacity duration-300"
          >
            ABOUT US
          </a>
          <Link
            href="/apply"
            className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium tracking-[0.14em] text-white border border-white/80 rounded hover:bg-white/10 transition-all duration-300"
          >
            APPLY NOW
          </Link>
        </div>
      </nav>
    </header>
  )
}
