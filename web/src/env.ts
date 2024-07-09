import { z } from 'zod'

const envSchema = z.object({
  BASE_API_URL: z.string().url(),
  STRAPI_API_TOKEN: z.string(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variable: ',
    parsedEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid environment variable')
}

export const env = parsedEnv.data
