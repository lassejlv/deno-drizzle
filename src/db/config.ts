import { defineConfig } from 'drizzle-kit'
import { env } from '../lib/env.ts'

export default defineConfig({
  schema: 'src/db/schema.ts',
  out: 'migrations',
  dialect: 'turso',
  dbCredentials: {
    url: env.TURSO_URL,
    authToken: env.TURSO_TOKEN,
  },
  strict: true,
})
