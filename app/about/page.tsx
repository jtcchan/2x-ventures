import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | 2x Ventures',
  description: "As founders and operators at heart, we've always been more comfortable getting our hands dirty and improving all aspects of a client's operations. 2x Ventures is our calling and commitment in helping other founders succeed.",
}

export default function AboutPage() {
  return (
    <>
      {/* Our Story Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[940px] mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9a9a9a] mb-4">
              OUR STORY
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[var(--font-dm-serif)] text-[#1a1b1f] leading-tight">
              Skin in the game
            </h2>
          </div>
          
          <div className="space-y-6 text-base sm:text-lg text-[#5d5d5d] leading-relaxed max-w-[680px] mx-auto">
            <p>
              We started 2x Ventures as a way overcome the limits of a traditional agency model—where conversations often started from scope and retainers, rather than growth and mutual profitability. As founders and operators at heart, we&rsquo;ve always been more comfortable getting our hands dirty and improving all aspects of a client&rsquo;s operations.
            </p>
            
            <p>
              More importantly, we loved helping founders. We&rsquo;ve seen firsthand how many have poured their hearts into following their businesses. And we wanted a way to share our skills, commitments, and resources fully and be true partners in the business, rather than turning them away.
            </p>
            
            <p>
              So what started as an experimental contract turned out to be our calling. 2x Ventures is the result of our commitment in this direction.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F5F6F8] rounded-2xl py-14 sm:py-18 lg:py-20 px-6 sm:px-10 lg:px-16 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400 mb-4">
              NEXT STEPS
            </p>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[var(--font-dm-serif)] text-gray-900 leading-tight mb-8 sm:mb-10">
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
                href="mailto:hello@2xcd.com?subject=2x%20Ventures%20General%20Inquiry" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 underline underline-offset-2 hover:text-gray-900 transition-colors"
              >
                hello@2xcd.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
