import type { Metadata } from 'next'
import { Montserrat, DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: ['400'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'We buy and grow high potential brands | 2x Ventures',
  description: 'We buy and grow high potential brands with great products and strong metrics.',
  openGraph: {
    title: 'We buy and grow high potential brands | 2x Ventures',
    description: 'We buy and grow high potential brands with great products and strong metrics.',
    url: 'https://2x.ventures',
    siteName: '2x Ventures',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dmSerif.variable} ${dmSans.variable}`}>
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
