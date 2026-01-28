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
    <section id="criteria" className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          Our Criteria
        </h2>
        
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Finding a good fit
        </h3>
        
        <p className="text-gray-600 text-lg mb-10 text-center">
          We've found companies with the following qualities typically find the best fit with our team:
        </p>
        
        <ul className="space-y-6">
          {criteria.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-lg text-gray-700"
            >
              <span className="text-2xl text-gray-900 font-semibold flex-shrink-0">
                ➤
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
