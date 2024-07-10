'use client'

import { PhotoProvider, PhotoView } from 'react-photo-view'
import Image from 'next/image'
import useIsSmallScreen from '@/utils/useIsSmallScreen'
import type { ThumbProps } from './page'
export default function Thumbnail({ thumb }: { thumb: ThumbProps }) {
  const isSmallScreen = useIsSmallScreen()

  return (
    <div className="relative h-[250px] lg:h-[600px] lg:w-[1280px] rounded-md">
      <PhotoProvider>
        <PhotoView
          src={isSmallScreen ? thumb.attributes.url : thumb.attributes.url}
        >
          <Image
            src={isSmallScreen ? thumb.attributes.url : thumb.attributes.url}
            className="lg:h-[600px] lg:w-[1280px] object-contain rounded-md !m-0!p-0 hover:opacity-80 cursor-pointer"
            width={
              isSmallScreen ? thumb.attributes.width : thumb.attributes.width
            }
            height={
              isSmallScreen ? thumb.attributes.height : thumb.attributes.height
            }
            quality={100}
            alt="thumbnail"
          />
        </PhotoView>
      </PhotoProvider>
    </div>
  )
}
