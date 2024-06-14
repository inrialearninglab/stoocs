import { z } from 'zod';
import { GradeReportQuestionCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionCreateNestedManyWithoutGradeReportLineInput.schema';
import { GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema } from './GradeReportCreateNestedOneWithoutGradeReportLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateWithoutGradeReportProblemsInput> =
  z
    .object({
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
      gradeReport: z.lazy(
        () =>
          GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema,
      ),
    })
    .strict();

export const GradeReportLineCreateWithoutGradeReportProblemsInputObjectSchema =
  Schema;
