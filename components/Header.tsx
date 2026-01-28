'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="h-8 relative flex items-center hover:opacity-80 transition-opacity duration-300">
          <Image
            src="/2x-logo.png"
            alt="2x Ventures"
            width={100}
            height={32}
            className="h-full w-auto object-contain"
            priority
          />
        </Link>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#portfolio"
            className="hidden sm:inline-flex px-4 py-2 text-gray-700 text-sm font-medium hover:text-black transition-colors duration-300"
          >
            Portfolio
          </a>
          <a
            href="#criteria"
            className="hidden sm:inline-flex px-4 py-2 text-gray-700 text-sm font-medium hover:text-black transition-colors duration-300"
          >
            Criteria
          </a>
          <Link
            href="/apply"
            className="px-6 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Apply
          </Link>
        </div>
      </nav>
    </header>
  )
}
