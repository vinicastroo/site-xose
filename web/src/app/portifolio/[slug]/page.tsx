import { Header } from '@/components/header'
import { api } from '@/services/api'
import { redirect } from 'next/navigation'
import { Videos } from '../videos'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Fotos from './fotos'
import Thumbnail from './thumb'
import { ArrowLeft } from 'lucide-react'

// import { Videos } from '../videos'

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

async function fetchEvents(slug: string): Promise<EventsProps> {
  const response = await api(`/events?slug=${slug}&populate=*`)

  const events = await response.json()

  if (events.data[0]) {
    return events.data[0]
  }

  return events.data
}
export default async function Event({ params }: EventProps) {
  const { slug } = params
  if (!slug) return redirect('/')

  const event = await fetchEvents(slug)
  const videos = event.attributes.videos.data
  const fotos = event.attributes.fotos.data

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

          <Thumbnail thumb={event.attributes.thumb.data} />

          <div className="w-full flex flex-col p-4">
            <h2 className="text-white font-title text-2xl lg:text-4xl my-4">
              {event.attributes.titulo}
            </h2>

            <p
              className="text-white lg:text-base"
              dangerouslySetInnerHTML={{
                __html: event.attributes.descricao ?? '',
              }}
            />

            {videos.length > 0 && (
              <div className="my-5">
                <h2 className="text-white font-title text-lg mb-4">Videos</h2>
                <Videos videos={videos} />
              </div>
            )}

            {fotos.length > 0 && (
              <div className="my-5">
                <h2 className="text-white font-title text-lg mb-4">Fotos</h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <Fotos fotos={fotos} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
