import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    date: z.literal(true).optional(),
    moocSessionId: z.literal(true).optional(),
  })
  .strict();

export const GradeReportMinAggregateInputObjectSchema = Schema;
