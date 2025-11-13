import { z } from 'zod';

export const leadSchema = z.object({
  full_name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional().or(z.literal('').transform(()=>undefined)),
  cdl_class: z.enum(['A','B']).optional(),
  state: z.string().length(2).transform(s => s.toUpperCase()),
  years_exp: z.coerce.number().min(0).max(60).default(0),
});
