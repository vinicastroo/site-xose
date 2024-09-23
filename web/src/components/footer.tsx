import {
  AtSign,
  InstagramIcon,
  LinkedinIcon,
  Phone,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
export function Footer() {
  return (
    <footer className="bg-white  w-full">
      <div className="flex flex-col justify w-full m-auto max-w-7xl text-zinc-950">
        <div className="flex flex-col items-start m-auto lg:m-0 gap-5 lg:0 justify-center lg:flex-row lg:justify-between lg:items-start border-b-2 border-zinc-200 py-8">
          <div className="self-center">
            <Link href="/" className={`text-lg lg:text-3xl hover:opacity-50`}>
              <span className="font-title">Guilherme Schulze</span>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <strong className="pb-2 border-b border-zinc-950 text-zinc-950">
              Menu
            </strong>
            <Link
              href="/#sobre"
              className="flex items-center gap-2 group ease-out "
            >
              <span className="font-semibold font-inter text-zinc-950 group-hover:underline group-hover:opacity-80">
                Sobre mim
              </span>
            </Link>
            <Link
              href="/#meus-serviços"
              className="flex items-center gap-2 group ease-out "
            >
              <span className="font-semibold font-inter text-zinc-950 group-hover:underline group-hover:opacity-80">
                Meus Serviços
              </span>
            </Link>

            <Link href="/#projetos" className="flex items-center gap-2 group">
              <span className="font-semibold font-inter text-zinc-950 group-hover:underline group-hover:opacity-80">
                Projetos
              </span>
            </Link>
            <Link href="/portifolio" className="flex items-center gap-2 group">
              <span className="font-semibold font-inter text-zinc-950 group-hover:underline group-hover:opacity-80">
                Portifólio
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <strong className="pb-2 border-b border-zinc-950 text-zinc-950">
              Redes Sociais
            </strong>

            <Link
              href="https://www.instagram.com/gui_schulze/"
              className="flex items-center gap-2 group ease-out "
            >
              <InstagramIcon className="w-5 h-5" />
              <span className="font-semibold font-inter  text-zinc-950 group-hover:underline group-hover:opacity-80">
                Instagram
              </span>
            </Link>

            <Link
              href="https://www.youtube.com/@GuiSchulzee/videos"
              className="flex items-center gap-2 group"
            >
              <Youtube className="w-5 h-5" />
              <span className="font-semibold font-inter text-zinc-950 group-hover:underline group-hover:opacity-80">
                Youtube
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/guilherme-schulze-28a766103/"
              className="flex items-center gap-2 group"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span className="font-semibold font-inter text-zinc-950 group-hover:underline group-hover:opacity-80">
                Linkedin
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <strong className="pb-2 border-b border-zinc-950 text-zinc-950">
              Fale comigo
            </strong>
            <Link
              href="https://api.whatsapp.com/send?phone=5547999377961&text=Ol%C3%A1,%20vim%20pelo%20site,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              className="flex items-center gap-2 group ease-out "
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold font-inter text-zinc-950 group-hover:underline group-hover:opacity-80">
                (47) 9 99377961
              </span>
            </Link>

            <Link
              href="mailto:guilhermeschulze01@gmail.com"
              className="flex items-center gap-2 group"
            >
              <AtSign className="size-5" />
              <span className="font-semibold font-inter text-zinc-950 group-hover:underline group-hover:opacity-80">
                E-mail de contato
              </span>
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 py-3 lg:flex-row lg:items-center items-start justify-start lg:justify-between m-auto lg:m-0  max-w-7xl text-zinc-950">
          <span className="text-zinc-950 text-sm m-auto lg:m-0 ">
            Copyright © Guilherme Schulze {new Date().getFullYear()}
          </span>

          <Link
            href="https://www.codelabz.com.br/"
            className="flex gap-2 text-xs items-center font-inter group m-auto lg:m-0  justify-start"
          >
            <span className="text-zinc-950 group-hover:underline">
              Desenvolvido por
            </span>
            <Image
              src="/codelabz.svg"
              alt="Desenvolvido pela empresa codelabz"
              className="group-hover:opacity-80"
              width={22}
              quality={100}
              height={22}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
