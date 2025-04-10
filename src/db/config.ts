import { defineConfig } from 'drizzle-kit'
import { env } from '../lib/env.ts'

export default defineConfig({
  schema: 'src/db/schema.ts',
  out: 'migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  strict: true,
})
