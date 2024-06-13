import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineCreateManyInput> = z
  .object({
    userID: z.number(),
    label: z.string(),
    score: z.number(),
    lineID: z.number(),
  })
  .strict();

export const GradeReportQuestionLineCreateManyInputObjectSchema = Schema;
