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
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400 mb-2">
            OUR PORTFOLIO
          </p>
        </div>
        
        {/* Top row - 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10 mb-10">
          {portfolioItems.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-700 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom row - 1 item, left aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
              <Image
                src={portfolioItems[3].logo}
                alt={portfolioItems[3].name}
                width={48}
                height={48}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-700 mb-1">
                {portfolioItems[3].name}
              </h3>
              <p className="text-sm text-gray-400">
                {portfolioItems[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
