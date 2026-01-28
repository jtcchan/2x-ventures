'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-black hover:text-blue-600 transition-colors duration-300">
              2x Ventures
            </Link>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              We buy and grow high potential brands.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-black mb-4 text-sm uppercase tracking-wide">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="#portfolio" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#criteria" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300">
                  Criteria
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300">
                  How It Works
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-black mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/apply" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300">
                  Apply
                </Link>
              </li>
              <li>
                <a href="mailto:hello@2x.ventures" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* CTA */}
          <div>
            <h4 className="font-semibold text-black mb-4 text-sm uppercase tracking-wide">Get Started</h4>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} 2x Ventures. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
