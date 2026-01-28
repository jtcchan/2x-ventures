import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
