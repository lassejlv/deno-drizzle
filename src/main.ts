import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { db } from './db/index.ts'
import { user } from './db/schema.ts'
import { z } from 'zod'
import { eq } from 'drizzle-orm'
import bjs from 'bcryptjs'

const CreateUserSchema = z.object({
  username: z.string().min(3).max(200),
  email: z.string().email(),
  password: z.string().min(8).max(64),
})

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

app.get('/users', async (c) => {
  const users = await db.query.user.findMany()
  return c.json(users)
})

app.post('/users', zValidator('json', CreateUserSchema), async (c) => {
  const data = c.req.valid('json')

  const password_hash = await bjs.hash(data.password, 10)

  const new_user = await db
    .insert(user)
    .values({
      username: data.username,
      email: data.email,
      password_hash,
    })
    .returning()
  return c.json(new_user[0])
})

app.get('/users/:id', zValidator('param', z.object({ id: z.string().uuid() })), async (c) => {
  const id = c.req.valid('param').id

  const data = await db.query.user.findFirst({ where: eq(user.id, id) })
  if (!data) throw new Error('User not found')

  return c.json(data)
})

app.onError((err, c) => {
  console.log(err)
  return c.json({ error: err.message }, 500)
})

Deno.serve(app.fetch)
