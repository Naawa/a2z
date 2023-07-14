import { z } from 'zod';

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export const emailForLinkSchema = z.object({
  email: z.string().email(),
});

export const newPasswordSchema = z.object({
  newPassword: z.string().min(6),
});