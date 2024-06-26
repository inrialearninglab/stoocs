import { z } from 'zod';
import { GradeReportProblemUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUncheckedCreateNestedManyWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInput> =
  z
    .object({
      id: z.string().optional(),
      userID: z.number(),
      grade: z.number(),
      certificateEligible: z.string(),
      certificateDelivered: z.string(),
      gradeReportID: z.string(),
      gradeReportProblems: z
        .lazy(
          () =>
            GradeReportProblemUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInputObjectSchema =
  Schema;
