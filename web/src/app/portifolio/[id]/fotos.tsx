'use client'

import { PhotoProvider, PhotoView } from 'react-photo-view'
import Image from 'next/image'
import type { PhotoData } from './page'
export default function Fotos({ fotos }: { fotos: PhotoData[] }) {
  if (fotos.length === 0) {
    return ''
  }

  return (
    <PhotoProvider>
      {fotos.map((foto) => {
        console.log(foto)
        if (!foto) {
          return ''
        }

        return (
          <PhotoView key={foto.id} src={foto.attributes.url}>
            <div className="w-full h-[300px] relative">
              <Image
                src={foto.attributes.url}
                className="w-full object-cover rounded-md !m-0!p-0 hover:opacity-80 cursor-pointer"
                quality={100}
                width={foto.attributes.width}
                height={foto.attributes.height}
                alt="thumbnail"
              />
            </div>
          </PhotoView>
        )
      })}
    </PhotoProvider>
  )
}
