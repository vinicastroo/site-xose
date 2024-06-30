import type { Metadata } from 'next'
import { Poppins, Notable } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
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
      <body className={(poppins.className, notable.variable)}>
        <div className="scrollbar-thumb-sky-700 scrollbar-track-sky-300">
          {children}
        </div>
      </body>
    </html>
  )
}
