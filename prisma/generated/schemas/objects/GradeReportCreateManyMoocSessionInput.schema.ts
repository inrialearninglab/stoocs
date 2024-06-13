import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportCreateManyMoocSessionInput> = z
  .object({
    id: z.string().optional(),
    date: z.coerce.date().optional(),
  })
  .strict();

export const GradeReportCreateManyMoocSessionInputObjectSchema = Schema;
