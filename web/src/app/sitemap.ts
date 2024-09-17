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

  const events: EventsProps[] = response.data
  const formattedEvents: Metadata[] = events.map((event) => {
    return {
      url: `${process.env.BASE_API_URL}/portifolio/${event.id}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
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
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.guilhermeschulze.com.br/portifolio',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  return [...defaultPaths, ...events]
}
