import { sqliteTable } from 'drizzle-orm/sqlite-core'
import { createInsertSchema } from 'drizzle-zod'

export const user = sqliteTable('user', (t) => ({
  id: t.integer().primaryKey(),
  username: t.text().notNull().unique(),
}))

export type SelectUser = typeof user.$inferSelect
export type InsertUser = typeof user.$inferInsert
export const userSchemaInsert = createInsertSchema(user)
