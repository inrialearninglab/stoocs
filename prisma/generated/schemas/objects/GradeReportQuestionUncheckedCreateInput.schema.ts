import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    userID: z.number(),
    label: z.string(),
    score: z.number(),
    lineID: z.string(),
  })
  .strict();

export const GradeReportQuestionUncheckedCreateInputObjectSchema = Schema;
