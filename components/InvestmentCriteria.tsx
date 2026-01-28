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
    <section id="criteria" className="py-20 sm:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <p className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-6">
            Our Criteria
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
            Finding a good fit
          </h2>
          <p className="text-lg text-gray-700">
            We've found companies with the following qualities typically find the best fit with our team:
          </p>
        </div>
        
        <div className="space-y-4 sm:space-y-5">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-lg text-gray-700 leading-relaxed"
            >
              <span className="text-blue-600 font-bold flex-shrink-0 pt-0">
                ➤
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
