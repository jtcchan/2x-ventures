'use client'

import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    name: 'Brushbox',
    description: 'Oral care subscription service',
    logo: '/brushbox-logo.png',
  },
  {
    id: 2,
    name: 'Neverquit Apparel',
    description: 'Padded socks for work & travel',
    logo: '/neverquit-logo.png',
  },
  {
    id: 3,
    name: 'Goodbits',
    description: 'Newsletter curator & editor',
    logo: '/goodbits-logo.png',
  },
  {
    id: 4,
    name: 'Dayboard',
    description: 'Daily task management app',
    logo: '/dayboard-logo.png',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <p className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-blue-600 px-4 py-2 rounded-full mb-4">
            Our portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Growing incredible brands
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl transition-all duration-300 hover:scale-105"
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
              <div className="mb-6 h-12 flex items-start">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={120}
                  height={48}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
              <h3 className="text-2xl sm:text-2xl font-bold text-black mb-3">
                {item.name}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
