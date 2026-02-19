import type { Metadata } from 'next'
import ApplyForm from '@/components/ApplyForm'

export const metadata: Metadata = {
  title: 'Apply to invest with us | 2x Ventures',
  description: 'Looking to add an eCommerce or SaaS business in your portfolio? We would love to hear from you.',
}

export default function ApplyPage() {
  return (
    <section className="bg-white min-h-screen pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-gray-900 mb-4">
            Investment Application
          </h1>
          <p className="text-base text-gray-500 leading-relaxed">
            We would love to hear from you if you'd like to invest and see your portfolio grow.
          </p>
        </div>
        
        <ApplyForm />
      </div>
    </section>
  )
}
