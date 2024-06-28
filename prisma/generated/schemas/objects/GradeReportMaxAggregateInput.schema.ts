import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    date: z.literal(true).optional(),
    moocSessionId: z.literal(true).optional(),
    totalActive: z.literal(true).optional(),
    totalCurious: z.literal(true).optional(),
    totalEligible: z.literal(true).optional(),
  })
  .strict();

export const GradeReportMaxAggregateInputObjectSchema = Schema;
