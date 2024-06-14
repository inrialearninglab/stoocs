import { z } from 'zod';
import { GradeReportQuestionUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUncheckedCreateNestedManyWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUncheckedCreateWithoutGradeReportProblemsInput> =
  z
    .object({
      userID: z.number(),
      grade: z.number(),
      certificateEligible: z.string(),
      certificateDelivered: z.string(),
      gradeReportID: z.string(),
      gradeReportQuestions: z
        .lazy(
          () =>
            GradeReportQuestionUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const GradeReportLineUncheckedCreateWithoutGradeReportProblemsInputObjectSchema =
  Schema;
