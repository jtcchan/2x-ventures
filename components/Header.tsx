'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  
  // On homepage: transparent header with light (white) logo/text over gradient
  // On other pages: solid white background with dark logo/text
  const headerClasses = isHomepage
    ? 'absolute top-0 left-0 right-0 z-50 bg-transparent'
    : 'sticky top-0 z-50 bg-white border-b border-gray-100'
  
  const textClasses = isHomepage
    ? 'text-white'
    : 'text-gray-700'
  
  const buttonClasses = isHomepage
    ? 'text-white border-white/80 hover:bg-white/10'
    : 'text-white bg-[#5BBFBA] border-[#5BBFBA] hover:bg-[#4AA9A4]'

  return (
    <header className={headerClasses}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-300">
          <Image
            src={isHomepage ? "/2x-logo.png" : "/2x-logo-alt.png"}
            alt="2x Micro Ventures"
            width={180}
            height={48}
            className={`h-10 sm:h-12 w-auto ${isHomepage ? 'brightness-0 invert' : ''}`}
            priority
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/about"
            className={`text-xs sm:text-sm font-medium tracking-[0.14em] hover:opacity-80 transition-opacity duration-300 ${textClasses}`}
          >
            ABOUT US
          </Link>
          <Link
            href="/apply"
            className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium tracking-[0.14em] border rounded transition-all duration-300 ${buttonClasses}`}
          >
            APPLY NOW
          </Link>
        </div>
      </nav>
    </header>
  )
}
