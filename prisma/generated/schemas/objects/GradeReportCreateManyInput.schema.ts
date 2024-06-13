import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportCreateManyInput> = z
  .object({
    id: z.string().optional(),
    date: z.coerce.date().optional(),
    moocSessionId: z.string(),
  })
  .strict();

export const GradeReportCreateManyInputObjectSchema = Schema;
