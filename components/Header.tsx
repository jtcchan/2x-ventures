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
    : 'sticky top-0 z-50 bg-white'
  
  const textClasses = isHomepage
    ? 'text-white opacity-60 hover:opacity-90'
    : 'text-[#1a1b1f] opacity-60 hover:opacity-90'
  
  const buttonClasses = isHomepage
    ? 'text-white opacity-80 bg-transparent border-2 border-white hover:bg-white/10'
    : 'text-white bg-[#68b0cc] border-2 border-[#68b0cc] hover:bg-[#32343a]'

  return (
    <header className={headerClasses}>
      <nav className="max-w-[940px] mx-auto px-[20px] sm:px-[50px] py-[20px] pb-[10px] flex items-center justify-between">
        <Link href="/" className="h-[60px] flex items-center hover:opacity-80 transition-opacity duration-300">
          {/* Mobile (≤767px): always show dark/colored logo */}
          <Image
            src="/2x-logo-alt.png"
            alt="2x Micro Ventures"
            width={180}
            height={60}
            className="md:hidden h-full w-auto object-contain object-left"
            priority
          />
          {/* Desktop (≥768px): white logo on homepage, dark logo on other pages */}
          <Image
            src={isHomepage ? "/2x-logo-white.png" : "/2x-logo-alt.png"}
            alt="2x Micro Ventures"
            width={180}
            height={60}
            className="hidden md:block h-full w-auto object-contain object-left"
            priority
          />
        </Link>

        <div className="flex items-center gap-[16px]">
          <Link
            href="/about"
            className={`hidden sm:block text-xs font-medium tracking-[0.08em] uppercase py-[9px] transition-opacity duration-200 ${textClasses}`}
          >
            About Us
          </Link>
          <Link
            href="/apply"
            className={`px-[25px] py-[12px] text-xs font-normal tracking-[0.15em] uppercase rounded-[5px] transition-all duration-400 ${buttonClasses}`}
          >
            Apply Now
          </Link>
        </div>
      </nav>
    </header>
  )
}
