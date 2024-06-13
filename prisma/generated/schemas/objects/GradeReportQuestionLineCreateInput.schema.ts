import { z } from 'zod';
import { GradeReportLineCreateNestedOneWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineCreateNestedOneWithoutGradeReportQuestionLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineCreateInput> = z
  .object({
    userID: z.number(),
    label: z.string(),
    score: z.number(),
    GradeReportLine: z.lazy(
      () =>
        GradeReportLineCreateNestedOneWithoutGradeReportQuestionLinesInputObjectSchema,
    ),
  })
  .strict();

export const GradeReportQuestionLineCreateInputObjectSchema = Schema;
