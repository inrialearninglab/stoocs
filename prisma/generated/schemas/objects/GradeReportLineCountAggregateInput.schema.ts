import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userID: z.literal(true).optional(),
    grade: z.literal(true).optional(),
    certificateEligible: z.literal(true).optional(),
    certificateDelivered: z.literal(true).optional(),
    gradeReportID: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const GradeReportLineCountAggregateInputObjectSchema = Schema;
