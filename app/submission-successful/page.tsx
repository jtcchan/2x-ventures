import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Submission Successful | 2x Ventures',
  description: "Thank you for your application. We've received your information and will be in touch soon.",
}

export default function SubmissionSuccessfulPage() {
  return (
    <>
      {/* Success Section */}
      <section className="bg-white min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#5BBFBA]/10">
              <svg 
                className="w-10 h-10 text-[#5BBFBA]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] italic text-gray-900 leading-tight mb-6">
            Thanks for applying!
          </h1>
          
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-10">
            We've received your information and will get back to you within 2-5 business days. We look forward to speaking with you soon.
          </p>
          
          <Link
            href="/"
            className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white bg-[#5BBFBA] hover:bg-[#4AA9A4] rounded-md transition-colors duration-300"
          >
            RETURN HOME
          </Link>
        </div>
      </section>
    </>
  )
}
