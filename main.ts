import { db } from './db/index.ts'

Deno.serve(async (_req) => {
  const users = await db.query.user.findMany()

  return Response.json(users)
})
