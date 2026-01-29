'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#3D4852] text-white px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-8">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/2x-mark.png"
                alt="2x Ventures"
                width={60}
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
              COMPANY
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-[#5BBFBA] hover:text-[#76d6d1] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-[#5BBFBA] hover:text-[#76d6d1] transition-colors duration-300">
                  Invest With Us
                </Link>
              </li>
              <li>
                <a href="https://2xcd.com" target="_blank" rel="noopener noreferrer" className="text-[#5BBFBA] hover:text-[#76d6d1] transition-colors duration-300">
                  Our Agency
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
              RESOURCES
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-[#5BBFBA] hover:text-[#76d6d1] transition-colors duration-300">
                  Growth Talks
                </a>
              </li>
              <li>
                <a href="#" className="text-[#5BBFBA] hover:text-[#76d6d1] transition-colors duration-300">
                  CRO Guide
                </a>
              </li>
              <li>
                <span className="text-white/40">
                  Growth Marketing Blog
                </span>
              </li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
              OUR OFFICE
            </h4>
            <div className="text-sm text-white/80 leading-relaxed space-y-1">
              <p>2x Conversion Design Ltd.</p>
              <p>450 S.W. Marine Dr,</p>
              <p>Marine Gateway, 18th Floor</p>
              <p>Vancouver, BC V5X 0C3</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
              GET IN TOUCH
            </h4>
            <a
              href="mailto:hello@2xcd.com"
              className="text-sm text-[#5BBFBA] hover:text-[#76d6d1] transition-colors duration-300"
            >
              hello@2xcd.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-sm text-white/50 text-center">
          © 2022 2x Ventures Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
