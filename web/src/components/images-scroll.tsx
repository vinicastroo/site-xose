'use client'
import { ParallaxScroll } from './ui/parallax-scroll'

export function ImagesScroll({ images }: { images: string[] }) {
  return <ParallaxScroll images={images} className="mt-10 h-full" />
}
