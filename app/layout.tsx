import type { Metadata } from 'next'
import { Montserrat, DM_Serif_Display, DM_Sans } from 'next/font/google'
import Script from 'next/script'
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
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'We buy and grow high potential brands | 2x Ventures',
  description: '2x Ventures owns a small portfolio of DTC e-commerce & SaaS companies that leverages the experiences, data, & insights from our growth marketing agency.',
  openGraph: {
    title: 'We buy and grow high potential brands | 2x Ventures',
    description: '2x Ventures owns a small portfolio of DTC e-commerce & SaaS companies that leverages the experiences, data, & insights from our growth marketing agency.',
    url: 'https://2x.ventures',
    siteName: '2x Ventures',
  },
  icons: {
    icon: '/2x-mark.png',
    apple: '/2x-mark.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dmSerif.variable} ${dmSans.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WGV4CD5R');`}
        </Script>
      </head>
      <body className={`${montserrat.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGV4CD5R"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
