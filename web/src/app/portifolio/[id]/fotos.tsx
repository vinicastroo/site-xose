'use client'

import { PhotoProvider, PhotoView } from 'react-photo-view'
import Image from 'next/image'
import type { PhotoData } from './page'
import useIsSmallScreen from '@/utils/useIsSmallScreen'
export default function Fotos({ fotos }: { fotos: PhotoData[] }) {
  const isSmallScreen = useIsSmallScreen()

  if (fotos.length === 0) {
    return ''
  }

  return (
    <PhotoProvider>
      {fotos.map((foto) => {
        if (
          !foto ||
          !foto.attributes.formats.small.url ||
          !foto.attributes.formats.large.url
        ) {
          return ''
        }

        return (
          <PhotoView
            key={foto.id}
            src={
              isSmallScreen
                ? foto.attributes.formats.small.url
                : foto.attributes.formats.large.url
            }
          >
            <div className="w-full h-[300px] relative">
              <Image
                src={
                  isSmallScreen
                    ? foto.attributes.formats.small.url
                    : foto.attributes.formats.large.url
                }
                className="w-full object-cover rounded-md !m-0!p-0 hover:opacity-80 cursor-pointer"
                quality={100}
                width={
                  isSmallScreen
                    ? foto.attributes.formats.small.width
                    : foto.attributes.formats.large.width
                }
                height={
                  isSmallScreen
                    ? foto.attributes.formats.small.height
                    : foto.attributes.formats.large.height
                }
                alt="thumbnail"
              />
            </div>
          </PhotoView>
        )
      })}
    </PhotoProvider>
  )
}
