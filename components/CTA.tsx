'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="pt-0 pb-0 mx-[15px] sm:mx-[30px]">
      <div className="max-w-[940px] mx-auto">
        <div className="bg-[#F6F7FA] rounded-[10px] py-[60px] px-[25px] sm:px-[50px] md:px-[80px] text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-gray-500/60 mb-[10px]">
            Next Steps
          </p>
          
          <h2 className="text-[36px] font-[var(--font-dm-serif)] italic text-gray-900 leading-[50px] mb-5">
            Interested to learn more?
          </h2>
          
          <Link
            href="/apply"
            className="inline-block px-[35px] py-[16px] text-[14px] font-normal uppercase tracking-[0.15em] text-white bg-[#68b0cc] hover:bg-[#32343a] rounded-[5px] transition-colors duration-400"
          >
            Apply to Invest
          </Link>
          
          <p className="text-base text-gray-500/60 mt-5 max-w-[700px] mx-auto">
            Have a general inquiry? Reach out to{' '}
            <a 
              href="mailto:hello@2xcd.com?subject=2x%20Ventures%20General%20Inquiry" 
              target="_blank"
              className="text-gray-900 underline"
            >
              hello@2xcd.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
