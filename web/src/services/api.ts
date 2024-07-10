import { env } from '@/env'

const options = {
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
  next: { revalidate: 60 },
}
export function api(path: string, init?: RequestInit) {
  const baseUrl = env.BASE_API_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)

  return fetch(url, { ...options, ...init })
}
