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
          src={
            isSmallScreen
              ? thumb.attributes.formats.small.url
              : thumb.attributes.formats.large.url
          }
        >
          <Image
            src={
              isSmallScreen
                ? thumb.attributes.formats.small.url
                : thumb.attributes.formats.large.url
            }
            className="lg:h-[600px] lg:w-[1280px] object-contain rounded-md !m-0!p-0 hover:opacity-80 cursor-pointer"
            width={
              isSmallScreen
                ? thumb.attributes.formats.small.width
                : thumb.attributes.formats.large.width
            }
            height={
              isSmallScreen
                ? thumb.attributes.formats.small.height
                : thumb.attributes.formats.large.height
            }
            quality={100}
            alt="thumbnail"
          />
        </PhotoView>
      </PhotoProvider>
    </div>
  )
}
