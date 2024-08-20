import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import api from '@/services/api'
import { unstable_noStore as noStore } from 'next/cache'
export interface ThumbProps {
  data: {
    id: number
    attributes: {
      url: string
      cdn_url: string
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
  const response = await api.get(`/events?populate[0]=thumb&sort=order`)

  const events = response.data

  const formattedEvent = events.data.map((event: EventsProps) => {
    const url = event.attributes.thumb.data.attributes.url

    // Nova URL base
    const newBaseUrl = 'https://d3gxnhlpvojsk.cloudfront.net/'

    // Extraindo o nome do arquivo da URL original
    const fileName = url.split('/').pop()

    // Construindo a nova URL
    const newUrl = newBaseUrl + fileName
    return {
      ...event,
      attributes: {
        ...event.attributes,
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
  })

  return formattedEvent
}

export default async function Portifolio() {
  noStore()
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
                <div className="t absolute bottom-0 left-0 h-full w-full z-30 bg-foreground/50 flex justify-end p-8 bg-gradient-to-tr from-zinc-950/10 to-zinc-950/5 flex-col">
                  <h2 className="text-lg uppercase font-bold text-white">
                    {event.attributes.titulo}
                  </h2>
                  <a href="" className="underline text-xs text-white">
                    Ver Evento
                  </a>
                </div>

                {event && event.attributes.thumb.data.attributes.cdn_url && (
                  <Image
                    src={event.attributes.thumb.data.attributes.cdn_url}
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
