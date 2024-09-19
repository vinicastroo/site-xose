import api from '@/services/api'
import type { EventsProps } from './portifolio/page'

interface Metadata {
  url: string
  lastModified?: string | Date
  changeFrequency?: string
  priority?: number
}

async function getAllProjects() {
  const response = await api.get(`/events?populate[0]=thumb&sort=order`)

  const events = response.data
  const formattedEvents: Metadata[] = events.data.map((event: EventsProps) => {
    return {
      url: `${process.env.BASE_API_URL}/portifolio/${event.attributes.slug}`,
      lastModified: new Date(),
    }
  })

  return formattedEvents
}

export default async function sitemap() {
  const events = await getAllProjects()
  const defaultPaths = [
    {
      url: 'https://www.guilhermeschulze.com.br/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.guilhermeschulze.com.br/portifolio',
      lastModified: new Date(),
    },
  ]

  return [...defaultPaths, ...events]
}
