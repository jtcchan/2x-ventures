import Hero from '@/components/Hero'
import InvestmentFocus from '@/components/InvestmentFocus'
import Portfolio from '@/components/Portfolio'
import InvestmentCriteria from '@/components/InvestmentCriteria'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <InvestmentFocus />
      <Portfolio />
      <InvestmentCriteria />
      <HowItWorks />
      <CTA />
    </>
  )
}
