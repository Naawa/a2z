import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().default('Your Name'),
  email: z.string().email(),
  password: z.string().min(6)
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});