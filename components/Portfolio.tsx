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
      <div className="max-w-[900px] mx-auto px-[30px] sm:px-[50px] mb-[80px]">
        <div className="text-center mb-[10px]">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-gray-500/60">
            Our portfolio
          </p>
        </div>
        
        <div className="flex flex-wrap justify-between items-center opacity-70 mt-[10px]">
          {portfolioItems.map((item) => (
            <div key={item.id} className="flex items-center min-w-[250px] mb-5">
              <Image
                src={item.logo}
                alt={item.name}
                width={50}
                height={50}
                className="w-[50px] h-[50px] object-contain grayscale"
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
      </div>
    </section>
  )
}
