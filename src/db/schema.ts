import { sqliteTable } from 'drizzle-orm/sqlite-core'
import { v7 as uuid } from 'uuid'

export const user = sqliteTable('user', (t) => ({
  id: t.text().primaryKey().$defaultFn(uuid),
  username: t.text().notNull().unique(),
}))

export type SelectUser = typeof user.$inferSelect
export type InsertUser = typeof user.$inferInsert
