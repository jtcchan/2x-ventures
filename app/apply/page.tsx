import ApplyForm from '@/components/ApplyForm'

export const metadata = {
  title: 'Apply | 2x Ventures',
  description: 'Apply to partner with 2x Ventures and unlock your brand\'s potential',
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <p className="inline-block text-sm font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Partnership Application
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight">
            Apply to 2x Ventures
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Tell us about your business and let's explore how we can partner together to drive exponential growth. We're looking for exceptional products with strong potential.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-sm p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300">
          <ApplyForm />
        </div>

        <div className="mt-12 sm:mt-16 bg-gray-50 rounded-2xl p-8 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">
            What happens next?
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Initial Review</h3>
                <p className="text-gray-700 text-sm">We carefully review each application against our investment criteria and your business profile.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Initial Conversation</h3>
                <p className="text-gray-700 text-sm">If we see a fit, we'll schedule a call to learn more about your business and discuss potential opportunities.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Due Diligence & Partnership</h3>
                <p className="text-gray-700 text-sm">We'll dig deeper into your metrics and explore how we can best support your growth journey together.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Have questions? <a href="mailto:hello@2x.ventures" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">Email us</a>
          </p>
        </div>
      </div>
    </div>
  )
}
