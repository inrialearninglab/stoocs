import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineCreateManyGradeReportLineInput> =
  z
    .object({
      userID: z.number(),
      label: z.string(),
      score: z.number().optional().nullable(),
      possible: z.number().optional().nullable(),
    })
    .strict();

export const GradeReportProblemLineCreateManyGradeReportLineInputObjectSchema =
  Schema;
