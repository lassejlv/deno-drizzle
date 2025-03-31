import { sqliteTable } from 'drizzle-orm/sqlite-core'

export const user = sqliteTable('user', (t) => ({
  id: t.integer().primaryKey(),
  username: t.text().notNull().unique(),
}))

export type SelectUser = typeof user.$inferSelect
export type InsertUser = typeof user.$inferInsert
