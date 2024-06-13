import { z } from 'zod';
import { GradeReportProblemLineCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineCreateNestedManyWithoutGradeReportLineInput.schema';
import { GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema } from './GradeReportCreateNestedOneWithoutGradeReportLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateWithoutGradeReportQuestionLinesInput> =
  z
    .object({
      userID: z.number(),
      grade: z.number(),
      certificateEligible: z.string(),
      certificateDelivered: z.string(),
      gradeReportProblemLines: z
        .lazy(
          () =>
            GradeReportProblemLineCreateNestedManyWithoutGradeReportLineInputObjectSchema,
        )
        .optional(),
      gradeReport: z.lazy(
        () =>
          GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema,
      ),
    })
    .strict();

export const GradeReportLineCreateWithoutGradeReportQuestionLinesInputObjectSchema =
  Schema;
