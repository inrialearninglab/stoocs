import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    moocId: z.literal(true).optional(),
  })
  .strict();

export const PinnedMoocMinAggregateInputObjectSchema = Schema;
