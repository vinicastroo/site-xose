'use client'

import { PhotoProvider, PhotoView } from 'react-photo-view'
import Image from 'next/image'
import type { ThumbProps } from './page'
export default function Thumbnail({ thumb }: { thumb: ThumbProps }) {
  if (!thumb) {
    return null
  }

  return (
    <div className="relative h-[250px] lg:h-[600px] lg:w-[1280px] rounded-md">
      <PhotoProvider>
        <PhotoView src={thumb.attributes.url}>
          <Image
            src={thumb.attributes.url}
            className="lg:h-[600px] lg:w-[1280px] object-contain rounded-md !m-0!p-0 hover:opacity-80 cursor-pointer"
            width={thumb.attributes.width}
            height={thumb.attributes.height}
            quality={100}
            alt="thumbnail"
          />
        </PhotoView>
      </PhotoProvider>
    </div>
  )
}
