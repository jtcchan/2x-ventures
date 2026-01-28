'use client'

const options = [
  {
    id: 1,
    title: 'Full Acquisition',
    description: 'We take over operations with our team of experienced founders.',
    badge: 'Option 1: full acquisition',
  },
  {
    id: 2,
    title: 'Partnership',
    description: 'We join as operating partners and work alongside you and your team.',
    badge: 'Option 2: partnership',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
            How it works
          </h2>
          <p className="text-lg text-gray-700">
            We are flexible and can do majority acquisition, but are open to founding teams staying on.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {options.map((option) => (
            <div
              key={option.id}
              className="group bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:border-gray-300 hover:shadow-md"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-700 bg-gray-100 px-3 py-2 rounded mb-6">
                {option.badge}
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                {option.title}
              </h3>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
