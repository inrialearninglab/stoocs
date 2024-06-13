import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GradeReportQuestionLineUncheckedUpdateManyWithoutGradeReportLineNestedInputObjectSchema } from './GradeReportQuestionLineUncheckedUpdateManyWithoutGradeReportLineNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUncheckedUpdateWithoutGradeReportProblemLinesInput> =
  z
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
      gradeReportQuestionLines: z
        .lazy(
          () =>
            GradeReportQuestionLineUncheckedUpdateManyWithoutGradeReportLineNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const GradeReportLineUncheckedUpdateWithoutGradeReportProblemLinesInputObjectSchema =
  Schema;
