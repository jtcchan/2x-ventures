import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#5BBFBA_0%,#4A90A4_50%,#3D5A80_100%)] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 text-white">
      <div className="max-w-4xl mx-auto text-center w-full">
        <p className="text-[11px] sm:text-xs tracking-[0.32em] uppercase font-semibold text-white/85 mb-4 sm:mb-6">
          MICRO PRIVATE EQUITY FOR DTC ECOMMERCE AND SAAS
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-[var(--font-dm-serif)] italic leading-tight tracking-tight max-w-3xl mx-auto mb-6 sm:mb-8">
          We buy and grow high potential brands.
        </h1>
        <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          2x Ventures owns a small portfolio of DTC e-commerce &amp; SaaS companies that leverages the
          experiences, data, &amp; insights from our{' '}
          <Link
            href="/agency"
            className="underline decoration-white/70 underline-offset-4"
          >
            growth marketing agency
          </Link>
          .
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 260"
          className="h-[180px] w-full sm:h-[210px] md:h-[240px]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 170 L140 150 L260 165 L420 140 L560 155 L700 135 L840 150 L980 125 L1120 130 L1260 105 L1440 110 L1440 260 L0 260 Z"
            fill="rgba(255,255,255,0.16)"
          />
          <path
            d="M0 200 L160 180 L300 195 L460 170 L600 185 L760 160 L920 175 L1080 150 L1220 155 L1440 135 L1440 260 L0 260 Z"
            fill="rgba(255,255,255,0.12)"
          />
          <path
            d="M0 230 L180 205 L320 225 L520 195 L700 215 L900 185 L1100 205 L1280 190 L1440 150 L1440 260 L0 260 Z"
            fill="#FFFFFF"
          />
          <circle cx="160" cy="206" r="9" fill="#FFFFFF" stroke="rgba(210,225,235,0.8)" strokeWidth="2" />
          <circle cx="320" cy="226" r="9" fill="#FFFFFF" stroke="rgba(210,225,235,0.8)" strokeWidth="2" />
          <circle cx="520" cy="196" r="9" fill="#FFFFFF" stroke="rgba(210,225,235,0.8)" strokeWidth="2" />
          <circle cx="700" cy="216" r="9" fill="#FFFFFF" stroke="rgba(210,225,235,0.8)" strokeWidth="2" />
          <circle cx="900" cy="186" r="9" fill="#FFFFFF" stroke="rgba(210,225,235,0.8)" strokeWidth="2" />
          <circle cx="1100" cy="206" r="9" fill="#FFFFFF" stroke="rgba(210,225,235,0.8)" strokeWidth="2" />
          <circle cx="1280" cy="190" r="9" fill="#FFFFFF" stroke="rgba(210,225,235,0.8)" strokeWidth="2" />
        </svg>
      </div>
    </section>
  )
}
