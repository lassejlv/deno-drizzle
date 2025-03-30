import { defineConfig } from 'drizzle-kit'
import { env } from './env.ts'

export default defineConfig({
  schema: 'db/schema.ts',
  out: 'migrations',
  dialect: 'turso',
  dbCredentials: {
    url: env.TURSO_URL,
    authToken: env.TURSO_TOKEN,
  },
  strict: true,
})
