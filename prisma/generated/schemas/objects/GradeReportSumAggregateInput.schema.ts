import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportSumAggregateInputType> = z
  .object({
    totalActive: z.literal(true).optional(),
    totalCurious: z.literal(true).optional(),
    totalEligible: z.literal(true).optional(),
  })
  .strict();

export const GradeReportSumAggregateInputObjectSchema = Schema;
