import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineSumAggregateInputType> = z
  .object({
    userID: z.literal(true).optional(),
    grade: z.literal(true).optional(),
  })
  .strict();

export const GradeReportLineSumAggregateInputObjectSchema = Schema;
