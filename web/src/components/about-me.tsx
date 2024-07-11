'use client'
import Image from 'next/image'
import sobre from '../../public/sobre-mim.webp'
import { motion } from 'framer-motion'
export function AboutMe() {
  return (
    <div
      id="sobre"
      className="h-screen w-full bg-zinc-950 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:6rem_4rem]"
    >
      <div className="flex items-center justify-center w-full h-screen m-auto max-w-7xl text-white p-4">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.75 }}
        >
          <div className="flex-1">
            <h1 className="text-4xl font-title">Sobre mim</h1>
            <p className="mt-4">
              Olá! Sou Guilherme Schulze, um Videomaker/fotógrafo dedicado a
              capturar momentos especiais com criatividade e sensibilidade.
              Desde 2018, tenho o prazer de transformar momentos em memórias que
              duram para sempre. Sou formado em Produção Multimídia e apaixonado
              por cinema. Explore meu trabalho e entre em contato!
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
        </motion.div>
      </div>
    </div>
  )
}
