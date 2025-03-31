import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from './schema.ts'
import { env } from '../lib/env.ts'

export const db = drizzle(env.DATABASE_URL, {
  schema,
  logger: true,
})
