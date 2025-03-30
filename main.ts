import { db } from './db/index.ts'

const users = await db.query.user.findMany()
console.log(users)
