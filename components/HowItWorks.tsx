'use client'

const options = [
  {
    id: 1,
    title: 'Full Acquisition',
    description: 'We take over operations with our team of experienced founders.',
    badge: 'Option 1',
  },
  {
    id: 2,
    title: 'Partnership',
    description: 'We join as operating partners and work alongside you and your team.',
    badge: 'Option 2',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <p className="inline-block text-sm font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Our Approach
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            How it works
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            We are flexible and can do majority acquisition, but are open to founding teams staying on.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {options.map((option) => (
            <div
              key={option.id}
              className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-6">
                {option.badge}
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {option.title}
              </h3>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {option.description}
              </p>
              
              <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
