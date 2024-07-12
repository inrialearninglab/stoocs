import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionSumAggregateInputType> = z
  .object({
    totalEnrollments: z.literal(true).optional(),
    cutoffs: z.literal(true).optional(),
  })
  .strict();

export const MoocSessionSumAggregateInputObjectSchema = Schema;
