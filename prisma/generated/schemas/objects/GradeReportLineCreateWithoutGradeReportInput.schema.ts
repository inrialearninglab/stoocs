import { z } from 'zod';
import { GradeReportQuestionCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionCreateNestedManyWithoutGradeReportLineInput.schema';
import { GradeReportProblemCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemCreateNestedManyWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateWithoutGradeReportInput> = z
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
  })
  .strict();

export const GradeReportLineCreateWithoutGradeReportInputObjectSchema = Schema;
