import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Fotos from './fotos'
import Thumbnail from './thumb'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
// import type { Metadata } from 'next'

import { Videos } from '../videos'
import api from '@/services/api'
import type { Metadata } from 'next'
import { unstable_noStore as noStore } from 'next/cache'
interface EventProps {
  params: {
    slug: string
  }
}

export interface PhotoData {
  id: number
  attributes: {
    width: number
    height: number
    url: string
    cdn_url: string
    formats: {
      large: {
        width: number
        height: number
        url: string
      }
      small: {
        width: number
        height: number
        url: string
      }
    }
  }
}

export interface ThumbProps {
  id: number
  attributes: {
    url: string
    cdn_url: string
    width: number
    height: number
    formats: {
      large: {
        width: number
        height: number
        url: string
      }
      small: {
        width: number
        height: number
        url: string
      }
    }
  }
}

interface VideosProps {
  data: {
    id: number
    attributes: {
      url: string
    }
  }[]
}

interface EventsProps {
  id: number
  attributes: {
    titulo: string
    slug: string
    descricao: string | null
    thumb: { data: ThumbProps }
    createdAt: Date
    videos: VideosProps
    fotos: {
      data: PhotoData[]
    }
  }
}

export async function generateMetadata({
  params,
}: EventProps): Promise<Metadata> {
  const event = await getEvent(params.slug)

  if (!event) {
    return {
      title: 'Not found',
      description: 'The page you are looking for does not exist.',
    }
  }

  return {
    openGraph: {
      title: event.attributes.titulo,
      description: event.attributes.descricao ?? '',
      images: event.attributes.thumb.data.attributes.cdn_url,
    },
  }
}

export async function generateStaticParams() {
  const response = await api.get('/events?populate[0]=thumb')
  const products = await response.data

  return products.data.map((event: EventsProps) => ({ id: String(event.id) }))
}

async function getEvent(slug: string): Promise<EventsProps | undefined> {
  // const response = await api.get(`/events/${Number(id)}?populate=*`)
  const response = await api.get(
    `/events?filters[slug][$eq]=${slug}&populate=*`,
  )

  if (response.data.data.length === 0) {
    return undefined
  }

  const event: EventsProps = response.data.data[0]

  const url = event.attributes.thumb.data.attributes.url

  // Nova URL base
  const newBaseUrl = 'https://d3gxnhlpvojsk.cloudfront.net/'

  // Extraindo o nome do arquivo da URL original
  const fileName = url.split('/').pop()

  // Construindo a nova URL
  const newUrl = newBaseUrl + fileName
  let formattedFotos: PhotoData[] = []

  if (event.attributes.fotos.data && event.attributes.fotos.data.length > 0) {
    formattedFotos = event.attributes.fotos.data.map((photo: PhotoData) => {
      const urlFoto = photo.attributes.url
      // Extraindo o nome do arquivo da URL original
      const fileNamePhoto = urlFoto.split('/').pop()
      const newUrlPhoto = newBaseUrl + fileNamePhoto

      return {
        ...photo,
        attributes: { ...photo.attributes, cdn_url: newUrlPhoto },
      }
    })
  }

  const formattedEvent = {
    ...event,
    attributes: {
      ...event.attributes,
      fotos: { data: formattedFotos },
      thumb: {
        ...event.attributes.thumb,
        data: {
          ...event.attributes.thumb.data,
          attributes: {
            ...event.attributes.thumb.data.attributes,
            cdn_url: newUrl,
          },
        },
      },
    },
  }

  // const formattedEvents = events.data.map((event: EventsProps) => {

  return formattedEvent
}
export default async function Event({ params }: EventProps) {
  noStore()
  const event = await getEvent(params.slug)

  return (
    <div className={`flex flex-col bg-zinc-950`}>
      <div className="flex flex-col max-w-screen mb-10">
        <Header />

        <div className="flex flex-col h-full w-full m-auto max-w-7xl mt-20">
          <div className="flex items-center justify-between">
            <Link
              href="/portifolio"
              className="text-white hover:opacity-50 flex items-center gap-2 mb-5"
            >
              <ArrowLeft className="size-4" />
              <span>Voltar</span>
            </Link>
          </div>

          {event && (
            <>
              <Thumbnail thumb={event.attributes.thumb.data} />

              <div className="w-full flex flex-col p-4">
                <h2 className="text-white font-title text-2xl lg:text-4xl my-4">
                  {event.attributes.titulo}
                </h2>

                <p className="truncate text-white text-wrap">
                  {event.attributes.descricao}
                </p>

                {event.attributes.videos.data.length > 0 && (
                  <div className="my-5 flex flex-col">
                    <h2 className="text-white font-title text-lg mb-4">
                      Videos
                    </h2>
                    <Videos videos={event.attributes.videos.data} />
                  </div>
                )}

                {event.attributes.fotos.data.length > 0 && (
                  <div className="my-5">
                    <h2 className="text-white font-title text-lg mb-4">
                      Fotos
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                      <Fotos fotos={event.attributes.fotos.data} />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
