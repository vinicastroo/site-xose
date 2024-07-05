'use client'
import { ParallaxScroll } from './ui/parallax-scroll'

export function ImagesScroll({ images, ...rest }: { images: string[] }) {
  return <ParallaxScroll images={images} className="mt-10 h-full" {...rest} />
}
