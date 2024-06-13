import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineUncheckedCreateInput> = z
  .object({
    userID: z.number(),
    label: z.string(),
    score: z.number().optional().nullable(),
    possible: z.number().optional().nullable(),
    lineID: z.number(),
  })
  .strict();

export const GradeReportProblemLineUncheckedCreateInputObjectSchema = Schema;
