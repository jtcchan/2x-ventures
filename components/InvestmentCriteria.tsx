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
    <section id="criteria" className="pt-0 pb-0">
      <div className="max-w-[940px] mx-auto px-[30px] sm:px-[50px]">
        <div className="bg-[#F6F7FA] rounded-[10px] py-[60px] px-[40px]">
          <div className="text-center mb-0">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-gray-500/60 mb-[10px]">
              Our Criteria
            </p>
            <h2 className="text-[36px] font-[var(--font-dm-serif)] italic text-gray-900 leading-[50px] mb-5">
              Finding a good fit
            </h2>
            <p className="text-base text-gray-500/60 max-w-[700px] mx-auto mb-0">
              We've found companies with the following qualities typically find the best fit with our team:
            </p>
          </div>
          
          <ul className="list-none max-w-[550px] mx-auto mt-5 mb-0 pl-0">
            {criteria.map((item, index) => (
              <li
                key={index}
                className="text-base text-gray-500/60 leading-[28px] mb-[10px]"
              >
                ➤ {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
