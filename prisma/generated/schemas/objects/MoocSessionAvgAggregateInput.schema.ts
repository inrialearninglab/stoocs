import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionAvgAggregateInputType> = z
  .object({
    totalEnrollments: z.literal(true).optional(),
  })
  .strict();

export const MoocSessionAvgAggregateInputObjectSchema = Schema;
