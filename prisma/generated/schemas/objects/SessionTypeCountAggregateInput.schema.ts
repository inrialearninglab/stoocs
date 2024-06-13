import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    type: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const SessionTypeCountAggregateInputObjectSchema = Schema;
