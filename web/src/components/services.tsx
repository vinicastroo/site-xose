'use client'
import driftGif from '../../public/Reels-drift-slow.gif'
import bannerFoto from '../../public/banner-fotografia.webp'
import localFont from 'next/font/local'
import Image from 'next/image'

import { motion } from 'framer-motion'
import useIsSmallScreen from '@/utils/useIsSmallScreen'
const myFont = localFont({ src: '../assets/helvetica-compressed.otf' })
export function Services() {
  const isSmallScreen = useIsSmallScreen()
  return (
    <div
      id="meus-serviços"
      className="bg-zinc-50 w-full text-foreground p-4 h-screen flex items-center justify-center"
    >
      <div className="m-auto max-w-7xl w-full">
        <h1 className="text-2xl lg:text-4xl font-title">Meus serviços</h1>

        <div className="flex flex-col mt-10 gap-10">
          <div
            className={`h-52 lg:h-72 border flex items-end relative rounded-md bg-gradient-to-b from-zinc-950/90 to-zinc-950/80`}
          >
            <motion.div
              className="w-full h-full"
              initial={{ x: 0, y: 0 }}
              whileInView={{
                x: isSmallScreen ? 6 : 16,
                y: isSmallScreen ? -10 : -16,
              }}
              transition={{ duration: 0.75 }}
            >
              <span
                className={`text-3xl gap-4 left-6 absolute lg:text-6xl bottom-6 text-white uppercase ${myFont.className} z-10`}
              >
                Fotografia
              </span>
              <Image
                src={bannerFoto}
                width={1280}
                height={288}
                quality={100}
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </motion.div>
          </div>

          <div
            className={`h-52 lg:h-72 border flex items-end relative rounded-md bg-gradient-to-b from-zinc-950/90 to-zinc-950/80`}
          >
            <motion.div
              className="w-full h-full"
              initial={{ x: 0, y: 0 }}
              whileInView={{
                x: isSmallScreen ? 6 : 16,
                y: isSmallScreen ? -10 : -16,
              }}
              transition={{ duration: 0.75 }}
            >
              <span
                className={`text-3xl gap-4 left-6 absolute lg:text-6xl bottom-6 text-white uppercase ${myFont.className} z-10`}
              >
                Produção de vídeo
              </span>
              <Image
                src={driftGif}
                width={1280}
                height={288}
                quality={100}
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
