import { z } from 'zod';
import { GradeReportQuestionLineUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUncheckedCreateNestedManyWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInput> =
  z
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
    })
    .strict();

export const GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInputObjectSchema =
  Schema;
