'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
export function CTA() {
  return (
    <motion.div
      className="flex flex-col w-full m-auto max-w-7xl text-white p-4 py-16 my-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.75 }}
    >
      <h1 className="text-center font-title text-lg lg:text-4xl">
        Registre Seus Melhores Momentos
      </h1>
      <p className="text-center mt-4 lg:text-lg">
        Fotos e vídeos que contam sua história de forma única. Agende sua sessão
        hoje mesmo.
      </p>
      <Link
        href="https://api.whatsapp.com/send?phone=5547999377961&text=Olá, gostaria de fazer um orçamento."
        className="px-6 py-2 bg-yellow-400 border uppercase border-yellow-400 text-zinc-950 w-auto mt-8 m-auto rounded-md font-bold transform hover:-translate-y-1 transition duration-400"
      >
        Agende Agora!
      </Link>
    </motion.div>
  )
}
