'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-32 md:pt-64 md:pb-64">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 sm:mb-8 leading-tight tracking-tight max-w-3xl mx-auto">
          We buy and grow high potential brands
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-700 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          2x Ventures owns a small portfolio of DTC e-commerce & SaaS companies that leverages the experiences, data, & insights from our growth marketing agency.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link
            href="/apply"
            className="px-8 py-3 bg-black text-white text-base font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            Apply Now
          </Link>
          <a
            href="#portfolio"
            className="px-8 py-3 border-2 border-black text-black text-base font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
