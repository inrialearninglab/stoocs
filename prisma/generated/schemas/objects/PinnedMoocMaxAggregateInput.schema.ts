import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    moocId: z.literal(true).optional(),
  })
  .strict();

export const PinnedMoocMaxAggregateInputObjectSchema = Schema;
