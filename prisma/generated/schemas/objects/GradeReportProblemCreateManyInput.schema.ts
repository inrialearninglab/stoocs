import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemCreateManyInput> = z
  .object({
    id: z.string().optional(),
    userID: z.number(),
    label: z.string(),
    score: z.number().optional().nullable(),
    possible: z.number().optional().nullable(),
    lineID: z.string(),
  })
  .strict();

export const GradeReportProblemCreateManyInputObjectSchema = Schema;
