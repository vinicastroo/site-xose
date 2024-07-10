import { env } from '@/env'
import axios from 'axios'
// import { getSession } from 'next-auth/react'

const baseURL = env.BASE_API_URL + '/api'

const ApiClient = () => {
  const defaultOptions = {
    baseURL,
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }

  const instance = axios.create(defaultOptions)

  return instance
}

export default ApiClient()
