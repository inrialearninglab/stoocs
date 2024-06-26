import { z } from 'zod';
import { GradeReportLineCreateNestedOneWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineCreateNestedOneWithoutGradeReportQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionCreateInput> = z
  .object({
    id: z.string().optional(),
    userID: z.number(),
    label: z.string(),
    score: z.number(),
    gradeReportLine: z.lazy(
      () =>
        GradeReportLineCreateNestedOneWithoutGradeReportQuestionsInputObjectSchema,
    ),
  })
  .strict();

export const GradeReportQuestionCreateInputObjectSchema = Schema;
