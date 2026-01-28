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
    <section id="portfolio" className="py-20 sm:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <p className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-6">
            Our portfolio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-200 rounded-xl p-8 sm:p-10 transition-all duration-300 hover:border-gray-300 hover:shadow-md"
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
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
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
