'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-[940px] mx-auto px-[30px] sm:px-[50px]">
        <div className="bg-[#F5F6F8] rounded-[10px] py-14 sm:py-18 lg:py-20 px-[40px] sm:px-[60px] lg:px-[80px] text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400 mb-4">
            NEXT STEPS
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[var(--font-dm-serif)] italic text-gray-900 leading-tight mb-8 sm:mb-10">
            Interested to learn more?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/apply"
              className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white bg-[#5BBFBA] hover:bg-[#4AA9A4] rounded-md transition-colors duration-300"
            >
              APPLY TO INVEST
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-8">
            Have a general inquiry? Reach out to{' '}
            <a 
              href="mailto:hello@2xcd.com" 
              className="text-gray-700 underline underline-offset-2 hover:text-gray-900 transition-colors"
            >
              hello@2xcd.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
