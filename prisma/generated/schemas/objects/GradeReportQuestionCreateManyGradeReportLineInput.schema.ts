import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionCreateManyGradeReportLineInput> =
  z
    .object({
      id: z.string().optional(),
      userID: z.number(),
      label: z.string(),
      score: z.number(),
    })
    .strict();

export const GradeReportQuestionCreateManyGradeReportLineInputObjectSchema =
  Schema;
