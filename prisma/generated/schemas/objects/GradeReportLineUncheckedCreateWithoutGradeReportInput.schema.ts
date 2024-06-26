import { z } from 'zod';
import { GradeReportQuestionUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUncheckedCreateNestedManyWithoutGradeReportLineInput.schema';
import { GradeReportProblemUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUncheckedCreateNestedManyWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUncheckedCreateWithoutGradeReportInput> =
  z
    .object({
      id: z.string().optional(),
      userID: z.number(),
      grade: z.number(),
      certificateEligible: z.string(),
      certificateDelivered: z.string(),
      gradeReportQuestions: z
        .lazy(
          () =>
            GradeReportQuestionUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema,
        )
        .optional(),
      gradeReportProblems: z
        .lazy(
          () =>
            GradeReportProblemUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const GradeReportLineUncheckedCreateWithoutGradeReportInputObjectSchema =
  Schema;
