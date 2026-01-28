'use client'

const criteria = [
  'Proven, consumer products or self-serve B2B SaaS',
  'Predictable revenues with net profits of up to 25k/mo',
  'Gross margins of 60%+',
  'At least 2 years of operating history',
  'Products in established or growing categories, not temporary fads',
]

export default function InvestmentCriteria() {
  return (
    <section id="criteria" className="py-20 sm:py-32 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="inline-block text-sm font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Investment Criteria
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Finding a good fit
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            We've found companies with the following qualities typically find the best fit with our team:
          </p>
        </div>
        
        <div className="space-y-5 sm:space-y-6">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-lg bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
            >
              <span className="text-2xl text-blue-600 font-semibold flex-shrink-0 pt-0.5">
                ✓
              </span>
              <span className="text-base sm:text-lg text-gray-800 leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
