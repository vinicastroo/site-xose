import { Header } from '@/components/header'
import { Events } from './events'
import { Footer } from '@/components/footer'
import { Videos } from './videos'
import { Suspense } from 'react'

export interface PhotoData {
  id: number
  attributes: {
    formats: {
      thumbnail: {
        width: number
        height: number
        url: string
      }
      medium: {
        width: number
        height: number
        url: string
      }
      small: {
        width: number
        height: number
        url: string
      }
      large: {
        width: number
        height: number
        url: string
      }
    }
  }
}
export interface EventsProps {
  id: number
  attributes: {
    title: string
    createdAt: Date
    fotos: {
      data: PhotoData[]
    }
  }
}
export interface VideosProps {
  id: number
  attributes: {
    url: string
  }
}

const options = {
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
}
async function fetchEvents() {
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/events?populate=*`,
      options,
    )
    const response = await res.json()
    return response
  } catch (err) {
    console.error(err)
  }
}
async function fetchVideos() {
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/videos?populate=*`,
      options,
    )
    const response = await res.json()
    return response
  } catch (err) {
    console.error(err)
  }
}

export default async function Portifolio() {
  const responseEvents = await fetchEvents()
  const responseVideos = await fetchVideos()
  const events: EventsProps[] = responseEvents.data
  const videos: VideosProps[] = responseVideos.data

  return (
    <div className={`flex flex-col bg-zinc-950`}>
      <div className="flex flex-col min-h-screen max-w-screen">
        <Header />

        <div className="mt-20 w-full h-auto  m-auto p-5  py-10">
          <h1 className="text-4xl font-title mb-4 text-white">Videos</h1>

          <div>
            <Suspense fallback={<div>Carregando ...</div>}>
              <Videos videos={videos} />
            </Suspense>
          </div>

          <h1 className="text-2xl lg:text-4xl font-title my-4 text-white">
            Fotos de Eventos
          </h1>

          <Suspense fallback={<div>Carregando ...</div>}>
            <Events events={events} />
          </Suspense>
        </div>
      </div>

      <Footer />
    </div>
  )
}
