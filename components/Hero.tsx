'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
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
            className="text-white text-base font-semibold transition-all duration-300"
            style={{
              backgroundColor: '#000000',
              padding: '12px 32px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
          >
            Apply Now
          </Link>
          <a
            href="#portfolio"
            className="text-base font-semibold transition-all duration-300 inline-block"
            style={{
              color: '#000000',
              borderWidth: '2px',
              borderColor: '#000000',
              padding: '10px 30px',
              borderRadius: '12px',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#000000';
            }}
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
