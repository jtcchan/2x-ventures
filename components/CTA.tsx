'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-black text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            className="px-8 py-3 bg-white text-black text-base font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Apply to invest
          </Link>
          <a
            href="mailto:hello@2xcd.com?subject=2x%20Ventures%20General%20Inquiry"
            className="text-gray-300 hover:text-white text-base transition-colors duration-300"
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
