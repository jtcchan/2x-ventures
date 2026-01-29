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
    <section id="criteria" className="py-16 sm:py-20 lg:py-24 mx-[30px]">
      <div className="max-w-[940px] mx-auto px-4">
        <div className="bg-[#F5F6F8] rounded-[10px] py-14 sm:py-18 lg:py-20 px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400 mb-4">
              OUR CRITERIA
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[var(--font-dm-serif)] italic text-gray-900 leading-tight mb-6">
              Finding a good fit
            </h2>
            <p className="text-base text-gray-500">
              We've found companies with the following qualities typically find the best fit with our team:
            </p>
          </div>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-base text-gray-500 leading-relaxed"
              >
                <span className="text-gray-400 flex-shrink-0 mt-0.5">
                  ➤
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
