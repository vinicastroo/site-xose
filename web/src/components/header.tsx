'use client'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed z-50 w-full item-center transition ${isScrolled ? 'bg-black' : 'bg-transparent'} text-white flex p-4 justify-between items-center`}
    >
      <Link href="/" className={`text-lg lg:text-2xl hover:opacity-80`}>
        <span className="font-title">Guilherme Schulze</span>
      </Link>

      <div className="flex h-auto item-center space-x-4 sr-only lg:not-sr-only">
        <Link
          href="/#sobre"
          className="flex items-center justify-center font-inter text-sm lg:text-base font-semibold hover:underline"
        >
          Sobre Mim
        </Link>
        <Link
          href="/#meus-serviços"
          className="flex items-center justify-center font-inter text-sm lg:text-base font-semibold hover:underline"
        >
          Meus Serviços
        </Link>
        <Link
          href="/#projetos"
          className="flex items-center justify-center font-inter text-sm lg:text-base font-semibold hover:underline"
        >
          Projetos
        </Link>

        <Button className="bg-white text-black font-bold" size="sm">
          Portfólio
        </Button>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="lg:sr-only">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mt-4">
            <SheetTitle className="w-full">
              <strong className="font-title text-base">
                Guilherme Schulze
              </strong>
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Link
              href="/#sobre"
              className="flex font-inter text-sm lg:text-base font-semibold"
            >
              Sobre Mim
            </Link>
            <Link
              href="/#meus-serviços"
              className="flex font-inter text-sm lg:text-base font-semibold"
            >
              Meus Serviços
            </Link>
            <Link
              href="/#projetos"
              className="flex font-inter text-sm lg:text-base font-semibold"
            >
              Projetos
            </Link>
            <Link
              href="/portifolio"
              className="flex font-inter text-sm lg:text-base font-bold"
            >
              Portfólio
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
