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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Our portfolio
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Companies we've partnered with to drive growth and scale
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-200 rounded-xl p-8 sm:p-10 transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="mb-6 h-14 relative">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={140}
                  height={56}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
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
