import { z } from "zod";

const envSchema = z.object({
  TURSO_URL: z.string(),
  TURSO_TOKEN: z.string(),
});

export const env = envSchema.parse(Deno.env.toObject());
