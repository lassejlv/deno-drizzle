import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { db } from './db/index.ts'
import { user, userSchemaInsert } from './db/schema.ts'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

app.get('/users', async (c) => {
  const users = await db.query.user.findMany()
  return c.json(users)
})

app.post('/users', zValidator('json', userSchemaInsert), async (c) => {
  const data = c.req.valid('json')
  const new_user = await db.insert(user).values({ username: data.username }).returning().get()
  return c.json(new_user)
})

app.onError((err, c) => {
  console.log(err)
  return c.json({ error: err.message }, 500)
})

Deno.serve(app.fetch)
