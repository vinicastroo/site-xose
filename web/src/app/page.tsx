import { Header } from '@/components/header'

import Link from 'next/link'
import { Footer } from '@/components/footer'
import { ImagesScroll } from '@/components/images-scroll'
import { getImages } from '@/utils/getImages'
import { Services } from '@/components/services'
import { AboutMe } from '@/components/about-me'
import { CTA } from '@/components/cta'

export default async function Home() {
  const images = getImages()

  return (
    <div className={`flex flex-col bg-zinc-950`}>
      <div className="flex flex-col h-screen w-full max-w-none lg:max-w-screen bg-heroMobile lg:bg-hero bg-center object-cover bg-cover bg-no-repeat">
        <Header />

        <div className="flex-1 w-full flex items-center justify-center flex-col">
          <h1 className="text-xl lg:text-6xl text-white text-center mt-5 font-title ">
            Eternizando momentos
          </h1>
          <h2
            className={`lg:tracking-title text-base lg:text-lg mt-2 text-white font-title text-center pb-6 bg-[rgba(0,0,0, 0.1)]`}
          >
            Meu olhar, suas memórias
          </h2>

          <Link
            href="https://api.whatsapp.com/send?phone=5547999377961&text=Olá, gostaria de fazer um orçamento."
            className="px-6 py-2 uppercase bg-yellow-400 rounded-md font-inter text-sm lg:text-sm  text-black  font-bold transform hover:-translate-y-1 transition duration-400"
          >
            Fale comigo!
          </Link>
        </div>
      </div>

      <AboutMe />

      <Services />

      <div
        id="projetos"
        className="flex flex-col w-full h-screen m-auto max-w-7xl text-white p-4 py-10"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl lg:text-4xl font-title mt-0 lg:mt-10">
            Projetos
          </h1>

          <Link
            href="/portifolio"
            className="font-bold text-sm lg:text-base font-title text-yellow-400 hover:underline"
          >
            Ver todos
          </Link>
        </div>

        <ImagesScroll images={images} />
      </div>

      <CTA />
      <Footer />
    </div>
  )
}
