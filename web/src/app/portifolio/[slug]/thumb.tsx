'use client'

import { PhotoView } from 'react-photo-view'
import Image from 'next/image'
import type { ThumbProps } from './page'
export default function Thumbnail({ thumb }: { thumb: ThumbProps }) {
  if (!thumb) {
    return null
  }

  return (
    <div className="relative lg:h-[600px] h-[300px] object-cover w-full rounded-md">
      <PhotoView src={thumb.attributes.cdn_url}>
        <Image
          src={thumb.attributes.cdn_url}
          className="w-full h-full object-cover bg-cover rounded-md !m-0!p-0 hover:opacity-80 cursor-pointer"
          width={1280}
          height={600}
          quality={100}
          alt="thumbnail"
        />
      </PhotoView>
    </div>
  )
}
