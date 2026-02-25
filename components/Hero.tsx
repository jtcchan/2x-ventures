import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section
      className={`${styles.hero} relative min-h-[560px] lg:min-h-[660px] lg:h-screen flex flex-col justify-start lg:justify-center overflow-hidden px-5 sm:px-6 lg:px-8 pt-[120px] lg:pt-[80px] pb-[220px] lg:pb-[120px] text-white`}
    >
      <div className="w-[90%] sm:w-[80%] md:w-[70%] max-w-[1140px] mx-auto text-center lg:-mt-[60px]">
        <p className="text-xs tracking-[0.08em] uppercase font-medium text-white/80 mb-[10px] max-w-[240px] mx-auto sm:max-w-none">
          Micro PRIVATE EQUITY for DTC eCommerce and SaaS
        </p>
        <h1 className="text-[36px] sm:text-[50px] md:text-[56px] lg:text-[64px] font-[var(--font-dm-serif)] leading-[48px] sm:leading-[64px] md:leading-[70px] lg:leading-[80px] max-w-[700px] mx-auto mb-[10px] text-shadow-[0_0_20px_rgba(0,0,0,0.15)]">
          We buy and grow high potential brands.
        </h1>
        <p className="text-[20px] text-white/80 max-w-[600px] mx-auto leading-[34px]">
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
