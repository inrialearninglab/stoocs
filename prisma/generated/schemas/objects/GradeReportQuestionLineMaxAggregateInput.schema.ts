import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineMaxAggregateInputType> = z
  .object({
    userID: z.literal(true).optional(),
    label: z.literal(true).optional(),
    score: z.literal(true).optional(),
    lineID: z.literal(true).optional(),
  })
  .strict();

export const GradeReportQuestionLineMaxAggregateInputObjectSchema = Schema;
