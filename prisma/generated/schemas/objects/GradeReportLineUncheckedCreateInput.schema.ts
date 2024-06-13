import { z } from 'zod';
import { GradeReportQuestionLineUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUncheckedCreateNestedManyWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUncheckedCreateNestedManyWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUncheckedCreateInput> = z
  .object({
    userID: z.number(),
    grade: z.number(),
    certificateEligible: z.string(),
    certificateDelivered: z.string(),
    gradeReportID: z.string(),
    gradeReportQuestionLines: z
      .lazy(
        () =>
          GradeReportQuestionLineUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema,
      )
      .optional(),
    gradeReportProblemLines: z
      .lazy(
        () =>
          GradeReportProblemLineUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportLineUncheckedCreateInputObjectSchema = Schema;
