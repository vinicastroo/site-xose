'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'
// import useMeasure from 'react-use-measure'
export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[]
  className?: string
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gridRef = useRef<any>(null)

  const third = Math.ceil(images.length / 3)

  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)

  return (
    <motion.div
      className={cn('items-start overflow-hidden  w-full', className)}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start mx-auto gap-5"
        ref={gridRef}
      >
        <div className="grid gap-5">
          {firstPart.map((el, idx) => (
            <motion.div
              key={'grid-1' + idx}
              animate={{
                y: [0, -2950, 0],
              }}
              transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
            >
              <Image
                src={el}
                className="h-96 w-full  rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                quality={100}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-5 mt-10">
          {secondPart.map((el, idx) => (
            <motion.div
              key={'grid-2' + idx}
              animate={{
                y: [0, -2950, 0],
              }}
              transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
            >
              <Image
                src={el}
                className="h-96 w-full   rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                quality={100}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-5">
          {thirdPart.map((el, idx) => (
            <motion.div
              key={'grid-3' + idx}
              animate={{
                y: [0, -2950, 0],
              }}
              transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
            >
              <Image
                src={el}
                className="h-96 w-full  rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                quality={100}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
