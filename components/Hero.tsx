import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-[80px] text-white" style={{ background: 'linear-gradient(165deg, #6BC5D2 0%, #5BBFBA 25%, #4A9DAF 50%, #4A90A4 75%, #3D7A94 100%)' }}>
      <div className="w-[70%] max-w-[1140px] mx-auto text-center">
        <p className="text-[11px] sm:text-xs tracking-[0.32em] uppercase font-medium text-white/85 mb-5 sm:mb-6">
          MICRO PRIVATE EQUITY FOR DTC ECOMMERCE AND SAAS
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-[var(--font-dm-serif)] italic leading-[1.1] tracking-tight max-w-3xl mx-auto mb-6 sm:mb-8">
          We buy and grow high potential brands.
        </h1>
        <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          2x Ventures owns a small portfolio of DTC e-commerce &amp; SaaS companies that leverages the
          experiences, data, &amp; insights from our{' '}
          <Link
            href="https://2xcd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted decoration-white/60 underline-offset-4 hover:decoration-white transition-colors"
          >
            growth marketing agency
          </Link>
          .
        </p>
      </div>

      {/* Geometric mountain/chart decorative element */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 280"
          className="h-[160px] w-full sm:h-[200px] md:h-[260px]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Back layer - subtle */}
          <path
            d="M-1 180 L120 160 L240 175 L400 145 L540 165 L680 140 L820 155 L960 125 L1100 135 L1240 110 L1441 120 L1441 281 L-1 281 Z"
            fill="rgba(255,255,255,0.12)"
          />
          {/* Middle layer */}
          <path
            d="M-1 210 L150 185 L290 205 L450 175 L590 195 L750 165 L910 185 L1070 155 L1210 165 L1441 145 L1441 281 L-1 281 Z"
            fill="rgba(255,255,255,0.08)"
          />
          {/* Front layer - white */}
          <path
            d="M-1 240 L170 210 L310 235 L510 200 L690 225 L890 190 L1090 215 L1270 195 L1441 160 L1441 281 L-1 281 Z"
            fill="#FFFFFF"
          />
          {/* Data points */}
          <circle cx="170" cy="211" r="8" fill="#FFFFFF" />
          <circle cx="310" cy="236" r="8" fill="#FFFFFF" />
          <circle cx="510" cy="201" r="8" fill="#FFFFFF" />
          <circle cx="690" cy="226" r="8" fill="#FFFFFF" />
          <circle cx="890" cy="191" r="8" fill="#FFFFFF" />
          <circle cx="1090" cy="216" r="8" fill="#FFFFFF" />
          <circle cx="1270" cy="196" r="8" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  )
}
