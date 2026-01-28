'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 sm:mb-8 leading-tight tracking-tight">
          We buy and grow<br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-600">
            high potential brands
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          We partner with founders of exceptional products to unlock their full potential. Great products deserve great teams.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-base font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            Get Started
          </Link>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-black text-black text-base font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
