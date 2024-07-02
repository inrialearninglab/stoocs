import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    firstname: z.literal(true).optional(),
    lastname: z.literal(true).optional(),
    password: z.literal(true).optional(),
  })
  .strict();

export const UserMinAggregateInputObjectSchema = Schema;
