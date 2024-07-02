import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    firstname: z.literal(true).optional(),
    lastname: z.literal(true).optional(),
    password: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const UserCountAggregateInputObjectSchema = Schema;
