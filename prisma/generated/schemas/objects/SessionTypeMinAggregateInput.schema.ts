import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    type: z.literal(true).optional(),
  })
  .strict();

export const SessionTypeMinAggregateInputObjectSchema = Schema;
