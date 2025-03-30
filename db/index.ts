import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schema.ts'
import { env } from '../env.ts'

export const db = drizzle({
  connection: {
    url: env.TURSO_URL,
    authToken: env.TURSO_TOKEN,
  },
  schema,
  logger: true,
})
