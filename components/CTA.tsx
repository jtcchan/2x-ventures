'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-black text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
          Next Steps
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-10 sm:mb-12 leading-relaxed">
          Interested to learn more? We'd love to hear about your brand and see if we're a good fit.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-base font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Apply Now
          </Link>
          <a
            href="mailto:hello@2x.ventures"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white text-base font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
