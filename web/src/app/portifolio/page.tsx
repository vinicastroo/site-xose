import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { api } from '@/services/api'
import Image from 'next/image'
import Link from 'next/link'

export interface ThumbProps {
  data: {
    id: number
    attributes: {
      url: string
      width: number
      height: number
    }
  }
}

export interface EventsProps {
  id: number
  attributes: {
    titulo: string
    slug: string
    thumb: ThumbProps
  }
}

async function fetchEvents(): Promise<EventsProps[]> {
  const response = await api(`/events?populate[0]=thumb`)

  const products = await response.json()
  return products.data
}

export default async function Portifolio() {
  const events = await fetchEvents()

  return (
    <div className={`flex flex-col bg-zinc-950`}>
      <div className="flex flex-col min-h-screen max-w-screen mb-10">
        <Header />

        <div className="mt-20 w-full h-auto m-auto p-5 py-5 flex flex-col">
          <h1 className="text-xl font-title mb-5 text-white">Eventos</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <Link
                key={event.id}
                className="h-96 relative group cursor-pointer"
                href={`/portifolio/${event.id}`}
              >
                <h2 className="text-2xl uppercase font-bold text-white absolute bottom-0 left-0 h-full w-full z-30 bg-foreground/50 flex items-end p-8 bg-gradient-to-tr from-zinc-950/10 to-zinc-950/5">
                  {event.attributes.titulo}
                </h2>

                {event && event.attributes.thumb.data.attributes.url && (
                  <Image
                    src={event.attributes.thumb.data.attributes.url}
                    className="h-96 w-full object-cover rounded-md !m-0 !p-0 group-hover:opacity-80"
                    sizes="400px"
                    quality={100}
                    width={event.attributes.thumb.data.attributes.width}
                    height={event.attributes.thumb.data.attributes.height}
                    // fill
                    alt="thumbnail"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
