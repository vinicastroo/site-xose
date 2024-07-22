'use client'
import Image from 'next/image'
import sobre from '../../public/sobre-mim-card.png'
import { motion } from 'framer-motion'
import useIsSmallScreen from '@/utils/useIsSmallScreen'
export function AboutMe() {
  const isSmallScreen = useIsSmallScreen()
  return (
    <div
      id="sobre"
      className="h-screen relative w-full bg-zinc-950 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:6rem_4rem]"
    >
      <div className="flex items-center justify-center w-full h-screen m-auto max-w-7xl text-white p-4 ">
        <motion.div
          className="flex flex-col items-center gap-10"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 0.75 }}
        >
          <div>
            <div className="h-[275px] lg:h-[375px] flex w-full items-center justify-center relative">
              <motion.div
                className="h-[250px] w-[166px] lg:h-[350px] lg:w-[266px] absolute top-0 m-auto"
                initial={{ x: 0, rotate: 0 }}
                whileInView={{
                  x: isSmallScreen ? -80 : -200,
                  y: isSmallScreen ? 30 : 40,
                  rotate: isSmallScreen ? -10 : -15,
                }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={sobre}
                  width={266}
                  height={350}
                  quality={100}
                  alt=""
                  className="w-full object-contain rounded-md shadow-md"
                />
              </motion.div>

              <motion.div
                className="h-[250px] w-[166px] lg:h-[350px] lg:w-[266px] absolute top-0"
                initial={{ x: 0, rotate: 0, y: 0 }}
                whileInView={{
                  x: isSmallScreen ? 80 : 200,
                  y: isSmallScreen ? 30 : 40,
                  rotate: isSmallScreen ? 10 : 15,
                }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={sobre}
                  width={266}
                  height={350}
                  quality={100}
                  alt=""
                  className="w-full object-contain rounded-md shadow-md"
                />
              </motion.div>

              <motion.div
                className="h-[250px] w-[166px] lg:h-[350px] lg:w-[266px] absolute top-0"
                initial={{ x: 0, y: isSmallScreen ? 15 : 0, rotate: 0 }}
              >
                <Image
                  src={sobre}
                  width={266}
                  height={350}
                  quality={100}
                  alt=""
                  className=" w-full object-contain rounded-md shadow-md"
                />
              </motion.div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-title text-center">Sobre mim</h1>
            <p className="mt-4 text-center max-w-3xl">
              Olá! Sou Guilherme Schulze, um Videomaker/fotógrafo dedicado a
              capturar momentos especiais com criatividade e sensibilidade.
              Desde 2018, tenho o prazer de transformar momentos em memórias que
              duram para sempre. Sou formado em Produção Multimídia e apaixonado
              por cinema. Explore meu trabalho e entre em contato!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
