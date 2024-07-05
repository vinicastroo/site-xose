import { AtSign, InstagramIcon, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
export function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="flex w-full m-auto max-w-7xl text-white p-4">
        <div className="flex w-full flex-col gap-4 lg:flex-row items-center justify-between m-auto max-w-7xl text-white">
          <span className="text-white text-sm">
            Copyright © Guilherme Schulze {new Date().getFullYear()}
          </span>

          <div className="flex items-center justify-between gap-4 ">
            <Link
              href="https://www.instagram.com/gui_schulze/"
              className="flex items-center gap-2 group"
            >
              <AtSign className="size-4 group-hover:stroke-yellow-500" />
              <span className="group-hover:text-yellow-500">Email</span>
            </Link>
            <Link
              href="https://www.instagram.com/gui_schulze/"
              className="flex items-center gap-2 group ease-out "
            >
              <InstagramIcon className="size-4 group-hover:stroke-yellow-500" />
              <span className="group-hover:text-yellow-500">Instagram</span>
            </Link>

            <Link
              href="https://www.youtube.com/@GuiSchulzee/videos"
              className="flex items-center gap-2 group"
            >
              <YoutubeIcon className="size-4 group-hover:stroke-yellow-500" />
              <span className="group-hover:text-yellow-500">Youtube</span>
            </Link>
          </div>

          <Link
            href="https://www.codelabz.com.br/"
            className="flex gap-2 text-xs items-center font-inter group"
          >
            <span className="text-white group-hover:underline">
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
