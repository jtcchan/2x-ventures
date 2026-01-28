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
    <section id="portfolio" className="py-16 sm:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our portfolio
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 h-12 relative">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={120}
                  height={48}
                  className="h-full w-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
