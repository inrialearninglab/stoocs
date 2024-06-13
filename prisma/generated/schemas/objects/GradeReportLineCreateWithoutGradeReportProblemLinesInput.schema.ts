import { z } from 'zod';
import { GradeReportQuestionLineCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineCreateNestedManyWithoutGradeReportLineInput.schema';
import { GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema } from './GradeReportCreateNestedOneWithoutGradeReportLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateWithoutGradeReportProblemLinesInput> =
  z
    .object({
      userID: z.number(),
      grade: z.number(),
      certificateEligible: z.string(),
      certificateDelivered: z.string(),
      gradeReportQuestionLines: z
        .lazy(
          () =>
            GradeReportQuestionLineCreateNestedManyWithoutGradeReportLineInputObjectSchema,
        )
        .optional(),
      GradeReport: z.lazy(
        () =>
          GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema,
      ),
    })
    .strict();

export const GradeReportLineCreateWithoutGradeReportProblemLinesInputObjectSchema =
  Schema;
