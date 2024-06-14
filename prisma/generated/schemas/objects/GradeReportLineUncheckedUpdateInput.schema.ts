import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GradeReportQuestionUncheckedUpdateManyWithoutGradeReportLineNestedInputObjectSchema } from './GradeReportQuestionUncheckedUpdateManyWithoutGradeReportLineNestedInput.schema';
import { GradeReportProblemUncheckedUpdateManyWithoutGradeReportLineNestedInputObjectSchema } from './GradeReportProblemUncheckedUpdateManyWithoutGradeReportLineNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUncheckedUpdateInput> = z
  .object({
    userID: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    grade: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    certificateEligible: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    certificateDelivered: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    gradeReportID: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    gradeReportQuestions: z
      .lazy(
        () =>
          GradeReportQuestionUncheckedUpdateManyWithoutGradeReportLineNestedInputObjectSchema,
      )
      .optional(),
    gradeReportProblems: z
      .lazy(
        () =>
          GradeReportProblemUncheckedUpdateManyWithoutGradeReportLineNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportLineUncheckedUpdateInputObjectSchema = Schema;
