import { z } from 'zod';
import { GradeReportProblemCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemCreateNestedManyWithoutGradeReportLineInput.schema';
import { GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema } from './GradeReportCreateNestedOneWithoutGradeReportLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateWithoutGradeReportQuestionsInput> =
  z
    .object({
      userID: z.number(),
      grade: z.number(),
      certificateEligible: z.string(),
      certificateDelivered: z.string(),
      gradeReportProblems: z
        .lazy(
          () =>
            GradeReportProblemCreateNestedManyWithoutGradeReportLineInputObjectSchema,
        )
        .optional(),
      gradeReport: z.lazy(
        () =>
          GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema,
      ),
    })
    .strict();

export const GradeReportLineCreateWithoutGradeReportQuestionsInputObjectSchema =
  Schema;
