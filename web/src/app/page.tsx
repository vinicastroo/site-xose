import { Header } from '@/components/header'
import Image from 'next/image'

import sobre from '../../public/sobre-mim.webp'
import driftGif from '../../public/Reels-drift-slow.gif'
import bannerFoto from '../../public/banner-fotografia.webp'

import localFont from 'next/font/local'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { ImagesScroll } from '@/components/images-scroll'
import { getImages } from '@/utils/getImages'

const myFont = localFont({ src: '../assets/helvetica-compressed.otf' })

export default async function Home() {
  const images = getImages()

  return (
    <div className={`flex flex-col bg-zinc-950`}>
      <div className="flex flex-col h-screen w-full max-w-none lg:max-w-screen bg-hero object-cover bg-cover bg-no-repeat">
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
            href="https://api.whatsapp.com/send?phone=5547999377961&text=Ola, gostaria de agendar uma sessão"
            className="px-6 py-2 uppercase bg-yellow-400 rounded-md font-inter text-sm lg:text-base  text-black  font-bold transform hover:-translate-y-1 transition duration-400"
          >
            Agende agora!
          </Link>
        </div>
      </div>

      <div
        id="sobre"
        className="h-screen w-full bg-zinc-950 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:6rem_4rem]"
      >
        <div className="flex items-center justify-center w-full h-screen m-auto max-w-7xl text-white p-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
            <div className="flex-1">
              <h1 className="text-4xl font-title">Sobre mim</h1>
              <p className="mt-4">
                Olá! Sou Guilherme Schulze, um Videomaker/fotógrafo dedicado a
                capturar momentos especiais com criatividade e sensibilidade.
                Desde 2018, tenho o prazer de transformar momentos em memórias
                que duram para sempre. Sou formado em Produção Multimídia e
                apaixonado por cinema. Explore meu trabalho e entre em contato!
              </p>
            </div>

            <div className="h-96 flex-1 flex w-full ">
              <Image
                src={sobre}
                width={600}
                height={400}
                quality={100}
                alt=""
                className=" w-full object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="meus-serviços"
        className="bg-zinc-50 w-full text-foreground p-4 h-screen flex items-center justify-center"
      >
        <div className="m-auto max-w-7xl w-full">
          <h1 className="text-2xl lg:text-4xl font-title">Meus serviços</h1>

          <div className="flex flex-col mt-10 gap-10">
            <div
              className={`h-52 lg:h-72 p-8 border flex items-end relative bg-black`}
            >
              <span
                className={`text-3xl flex item-center gap-4  lg:text-6xl bottom-0 text-white uppercase ${myFont.className} z-10`}
              >
                Fotografia
              </span>

              <Image
                src={bannerFoto}
                width={1280}
                height={288}
                quality={100}
                alt=""
                className="w-full h-full object-cover absolute -top-3 left-0 translate-x-0 lg:translate-x-3 "
              />
            </div>

            <div
              className={`h-52 lg:h-72 p-8 border flex items-end relative bg-black`}
            >
              <span
                className={`text-3xl flex item-center gap-4 lg:text-6xl bottom-0 text-white uppercase ${myFont.className} z-10`}
              >
                Produção de vídeo
              </span>

              <Image
                src={driftGif}
                width={1280}
                height={288}
                quality={100}
                alt=""
                unoptimized
                className="w-full h-full object-cover absolute -top-3 left-0 translate-x-0 lg:translate-x-3  "
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="projetos"
        className="flex flex-col w-full h-screen m-auto max-w-7xl text-white p-4 py-10"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl lg:text-4xl font-title mt-10">Projetos</h1>

          <Link
            href="/portifolio"
            className="font-bold text-sm lg:text-base font-title text-yellow-400 hover:underline"
          >
            Ver todos
          </Link>
        </div>

        <ImagesScroll images={images} />
      </div>

      <div className="flex flex-col w-full  m-auto max-w-7xl text-white p-4 py-16 mb-8">
        <h1 className="text-center font-title text-lg lg:text-4xl">
          Registre Seus Melhores Momentos
        </h1>
        <p className="text-center mt-4 lg:text-lg">
          Fotos e vídeos que contam sua história de forma única. Agende sua
          sessão hoje mesmo.
        </p>
        <Link
          href="https://api.whatsapp.com/send?phone=5547999377961&text=Ola, gostaria de agendar uma sessão"
          className="px-6 py-2 bg-yellow-400 border uppercase border-yellow-400 text-zinc-950 w-auto mt-8 m-auto rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
        >
          Agende Agora!
        </Link>
      </div>
      <Footer />
    </div>
  )
}
