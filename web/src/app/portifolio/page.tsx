'use server'
import { Header } from '@/components/header'
import { Events } from './events'
import { Footer } from '@/components/footer'
import { Videos } from './videos'
import { api } from '@/services/api'

export interface PhotoData {
  id: number
  attributes: {
    width: number
    height: number
    url: string
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
  next: { revalidate: 60 },
}

async function fetchEvents(): Promise<EventsProps[]> {
  const response = await api(`/events?populate=*`, options)

  const products = await response.json()

  return products.data
}
async function fetchVideos(): Promise<VideosProps[]> {
  const response = await api(`/videos?populate=*`, options)

  const products = await response.json()
  return products.data
}
export default async function Portifolio() {
  const events = await fetchEvents()
  const videos = await fetchVideos()

  return (
    <div className={`flex flex-col bg-zinc-950`}>
      <div className="flex flex-col min-h-screen max-w-screen mb-10">
        <Header />

        <div className="mt-20 w-full h-auto m-auto p-5  py-10">
          <h1 className="text-4xl font-title mb-4 text-white">Videos</h1>

          <div>{videos.length > 0 && <Videos videos={videos} />}</div>

          <h1 className="text-2xl lg:text-4xl font-title my-4 text-white">
            Fotos de Eventos
          </h1>

          {events.length && <Events events={events} />}
        </div>
      </div>

      <Footer />
    </div>
  )
}
