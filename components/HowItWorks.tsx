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
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 bg-gray-50 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
            How it works
          </h2>
          <p className="text-lg text-gray-700">
            We are flexible and can do majority acquisition, but are open to founding teams staying on.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {options.map((option) => (
            <div
              key={option.id}
              className="group bg-white rounded-xl transition-all duration-300"
              style={{
                backgroundColor: '#ffffff',
                borderWidth: '2px',
                borderColor: '#ccc',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.06)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0066FF';
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0, 102, 255, 0.25), 0 2px 4px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#ccc';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
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
