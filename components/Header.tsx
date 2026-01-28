'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="h-8 relative">
          <Image
            src="/2x-logo.png"
            alt="2x Ventures"
            width={100}
            height={32}
            className="h-full w-auto"
          />
        </Link>
        <Link
          href="/apply"
          className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Apply
        </Link>
      </nav>
    </header>
  )
}
