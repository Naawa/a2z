import { z } from 'zod';

const schema = z.object({
  name: z.string().default('Your Name'),
  email: z.string().email()
});