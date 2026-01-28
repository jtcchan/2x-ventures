'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-black text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="inline-block text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-950 px-4 py-2 rounded-full mb-8">
          Next Steps
        </p>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 leading-tight">
          Interested to learn more?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link
            href="/apply"
            className="text-black text-base font-semibold transition-all duration-300 inline-block"
            style={{
              backgroundColor: '#ffffff',
              padding: '12px 32px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f0f0f0';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
          >
            Apply to invest
          </Link>
          <a
            href="mailto:hello@2xcd.com?subject=2x%20Ventures%20General%20Inquiry"
            className="text-gray-300 hover:text-white text-base transition-colors duration-300 font-medium"
          >
            General inquiry?{' '}
            <span className="underline">
              hello@2xcd.com
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
