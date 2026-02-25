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
    <section id="portfolio" className="pt-[60px] pb-[60px] bg-white">
      <div className="max-w-[940px] mx-auto px-[30px] sm:px-[50px] mb-[80px]">
        <div className="text-center mb-[10px]">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-gray-500/60">
            Our portfolio
          </p>
        </div>
        
        {/* 3+1 layout: 3 items in top row, Dayboard below left-aligned */}
        <div className="opacity-70 mt-[10px]">
          {/* Top row: 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[20px] gap-y-[20px] mb-[20px]">
            {portfolioItems.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] object-contain grayscale flex-shrink-0"
                />
                <div className="ml-5">
                  <p className="text-[20px] font-normal text-gray-900 leading-[34px] mb-0">
                    {item.name}
                  </p>
                  <p className="text-base text-gray-500/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom row: Dayboard only, left-aligned */}
          <div className="flex items-center">
            <Image
              src={portfolioItems[3].logo}
              alt={portfolioItems[3].name}
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-contain grayscale flex-shrink-0"
            />
            <div className="ml-5">
              <p className="text-[20px] font-normal text-gray-900 leading-[34px] mb-0">
                {portfolioItems[3].name}
              </p>
              <p className="text-base text-gray-500/60">
                {portfolioItems[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
