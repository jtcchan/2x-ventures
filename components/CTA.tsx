'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Next Steps
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Interested to learn more?
        </p>
        <Link
          href="/apply"
          className="inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </section>
  )
}
