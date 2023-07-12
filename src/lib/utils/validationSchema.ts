import { z } from 'zod';

export const schema = z.object({
  email: z.string().email().default('your-email@example.com'),
  password: z.string().min(6)
});