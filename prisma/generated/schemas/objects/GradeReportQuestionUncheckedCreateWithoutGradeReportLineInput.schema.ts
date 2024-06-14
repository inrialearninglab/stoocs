import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionUncheckedCreateWithoutGradeReportLineInput> =
  z
    .object({
      userID: z.number(),
      label: z.string(),
      score: z.number(),
    })
    .strict();

export const GradeReportQuestionUncheckedCreateWithoutGradeReportLineInputObjectSchema =
  Schema;
