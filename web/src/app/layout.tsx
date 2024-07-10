import type { Metadata } from 'next'
import { Inter, Notable } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import 'react-photo-view/dist/react-photo-view.css'

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
      </body>
    </html>
  )
}
