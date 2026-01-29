'use client'

const options = [
  {
    id: 1,
    title: 'Full acquisition',
    description: 'We take over operations with our team of experienced founders.',
    badge: 'OPTION 1: FULL ACQUISITION',
  },
  {
    id: 2,
    title: 'Partnership',
    description: 'We join as operating partners and work alongside you and your team.',
    badge: 'OPTION 2: PARTNERSHIP',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[var(--font-dm-serif)] italic text-gray-900 leading-tight mb-5">
            How it works
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            We are flexible and can do majority acquisition, but are open to founding teams staying on.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {options.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              {/* Teal accent bar at top */}
              <div className="h-1.5 bg-gradient-to-r from-[#5BBFBA] to-[#4A9DAF]" />
              
              <div className="p-6 sm:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400 mb-4">
                  {option.badge}
                </p>
                
                <p className="text-base text-gray-500 leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
