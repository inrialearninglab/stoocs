import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    date: z.literal(true).optional(),
    moocSessionId: z.literal(true).optional(),
  })
  .strict();

export const GradeReportMaxAggregateInputObjectSchema = Schema;
