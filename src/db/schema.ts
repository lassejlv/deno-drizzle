import { pgTable } from 'drizzle-orm/pg-core'
import { v7 as uuid } from 'uuid'

export const user = pgTable('user', (t) => ({
  id: t.text().primaryKey().$defaultFn(uuid),
  username: t.text().notNull().unique(),
  email: t.text().notNull().unique(),
  password_hash: t.text().notNull(),
}))

export type SelectUser = typeof user.$inferSelect
export type InsertUser = typeof user.$inferInsert
