import { z } from 'zod';
import { GradeReportQuestionLineCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineCreateNestedManyWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineCreateNestedManyWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateWithoutGradeReportInput> = z
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
    gradeReportProblemLines: z
      .lazy(
        () =>
          GradeReportProblemLineCreateNestedManyWithoutGradeReportLineInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportLineCreateWithoutGradeReportInputObjectSchema = Schema;
