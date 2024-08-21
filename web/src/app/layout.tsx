import type { Metadata } from 'next'
import { Inter, Notable } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import 'react-photo-view/dist/react-photo-view.css'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})
const notable = Notable({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-notable',
})

export const metadata: Metadata = {
  title: 'Guilherme Schulze - Fotógrafo e Videomaker em Rio do Sul',
  description:
    'Guilherme Schulze é fotógrafo e videomaker em Rio do Sul, especializado em capturar momentos únicos e memoráveis desde 2018. Com formação em Produção Multimídia e paixão por cinema, oferece serviços personalizados de fotografia e produção de vídeo para eventos, ensaios e projetos comerciais. Transforme suas memórias.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, notable.variable)}>
        <div className="antialiased">
          {children}
          <Analytics />
        </div>

        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1272151067480129');
        fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  )
}
