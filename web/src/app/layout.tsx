import type { Metadata } from 'next'
import { Inter, Notable } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})
const notable = Notable({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-notable',
})

export const metadata: Metadata = {
  title: 'Guilherme Schulze',
  description: 'Fotografo e videomaker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, notable.variable)}>
        <div className="scrollbar-thumb-sky-700 scrollbar-track-sky-300">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
