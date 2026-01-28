'use client'

const options = [
  {
    id: 1,
    title: 'Full Acquisition',
    description: 'We take over operations with our team of experienced founders.',
    icon: '🏢',
  },
  {
    id: 2,
    title: 'Partnership',
    description: 'We join as operating partners and work alongside you and your team.',
    icon: '🤝',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          How it works
        </h2>
        
        <p className="text-gray-600 text-lg mb-12 text-center">
          We are flexible and can do majority acquisition, but are open to founding teams staying on.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {options.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl mb-6">{option.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
