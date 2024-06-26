import { z } from 'zod';
import { GradeReportQuestionCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionCreateNestedManyWithoutGradeReportLineInput.schema';
import { GradeReportProblemCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemCreateNestedManyWithoutGradeReportLineInput.schema';
import { GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema } from './GradeReportCreateNestedOneWithoutGradeReportLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateInput> = z
  .object({
    id: z.string().optional(),
    userID: z.number(),
    grade: z.number(),
    certificateEligible: z.string(),
    certificateDelivered: z.string(),
    gradeReportQuestions: z
      .lazy(
        () =>
          GradeReportQuestionCreateNestedManyWithoutGradeReportLineInputObjectSchema,
      )
      .optional(),
    gradeReportProblems: z
      .lazy(
        () =>
          GradeReportProblemCreateNestedManyWithoutGradeReportLineInputObjectSchema,
      )
      .optional(),
    gradeReport: z.lazy(
      () => GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema,
    ),
  })
  .strict();

export const GradeReportLineCreateInputObjectSchema = Schema;
