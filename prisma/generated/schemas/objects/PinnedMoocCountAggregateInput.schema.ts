import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    moocId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PinnedMoocCountAggregateInputObjectSchema = Schema;
