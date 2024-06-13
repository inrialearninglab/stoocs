import { z } from 'zod';
import { GradeReportQuestionLineCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineCreateNestedManyWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineCreateNestedManyWithoutGradeReportLineInput.schema';
import { GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema } from './GradeReportCreateNestedOneWithoutGradeReportLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateInput> = z
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
    GradeReport: z.lazy(
      () => GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema,
    ),
  })
  .strict();

export const GradeReportLineCreateInputObjectSchema = Schema;
