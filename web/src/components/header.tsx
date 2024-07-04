import Link from 'next/link'
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../assets/helvetica-compressed.otf' })

export function Header() {
  return (
    <div
      className={`fixed z-50 w-full item-center bg-black text-white flex p-4 justify-between `}
    >
      <Link href="/" className={`text-lg lg:text-3xl ${myFont.className}`}>
        Guilherme Schulze
      </Link>

      <div className="flex h-auto item-center space-x-4">
        <Link
          href="/#sobre"
          className="flex items-center justify-center font-title   text-sm lg:text-base font-semibold"
        >
          Sobre
        </Link>
        <Link
          href="/portifolio"
          className="flex items-center justify-center font-title   text-sm lg:text-base font-semibold"
        >
          Portfólio
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center font-title   text-sm lg:text-base font-semibold"
        >
          Contato
        </Link>
      </div>
    </div>
  )
}
