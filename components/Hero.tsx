import Link from 'next/link'

export default function Hero() {
  return (
    <section 
      className="relative min-h-[620px] flex flex-col justify-center overflow-hidden px-5 sm:px-6 lg:px-8 pt-[80px] pb-[120px] text-white" 
      style={{ 
        background: 'linear-gradient(150deg, #91a1df, #68b0cc 50%, #68b0cc 65%, #4d7fe8)', 
        backgroundImage: 'url("/backdrop.png"), linear-gradient(150deg, #91a1df, #68b0cc 50%, #68b0cc 65%, #4d7fe8)', 
        backgroundPosition: '50% 100%, 0 0', 
        backgroundRepeat: 'no-repeat, repeat', 
        backgroundSize: 'contain, auto' 
      }}
    >
      <div className="w-full sm:w-[70%] max-w-[1140px] mx-auto text-center">
        <p className="text-xs tracking-[0.08em] uppercase font-medium text-white/80 mb-[10px]">
          Micro PRIVATE EQUITY for DTC eCommerce and SaaS
        </p>
        <h1 className="text-[32px] sm:text-5xl md:text-6xl lg:text-[64px] font-[var(--font-dm-serif)] italic leading-[1.25] max-w-[700px] mx-auto mb-[10px] text-shadow-[0_0_20px_rgba(0,0,0,0.15)]">
          We buy and grow high potential brands.
        </h1>
        <p className="text-base sm:text-[20px] text-white/80 max-w-[600px] mx-auto leading-[1.7]">
          2x Ventures owns a small portfolio of DTC e-commerce &amp; SaaS companies that leverages the
          experiences, data, &amp; insights from our{' '}
          <Link
            href="https://2xcd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-dotted border-white no-underline"
          >
            growth marketing agency
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
