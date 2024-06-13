import { z } from 'zod';
import { GradeReportProblemLineUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUncheckedCreateNestedManyWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInput> =
  z
    .object({
      userID: z.number(),
      grade: z.number(),
      certificateEligible: z.string(),
      certificateDelivered: z.string(),
      gradeReportID: z.string(),
      gradeReportProblemLines: z
        .lazy(
          () =>
            GradeReportProblemLineUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInputObjectSchema =
  Schema;
