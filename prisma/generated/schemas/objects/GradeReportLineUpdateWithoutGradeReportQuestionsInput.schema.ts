import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { GradeReportProblemUpdateManyWithoutGradeReportLineNestedInputObjectSchema } from './GradeReportProblemUpdateManyWithoutGradeReportLineNestedInput.schema';
import { GradeReportUpdateOneRequiredWithoutGradeReportLinesNestedInputObjectSchema } from './GradeReportUpdateOneRequiredWithoutGradeReportLinesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpdateWithoutGradeReportQuestionsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      userID: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      grade: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
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
      gradeReportProblems: z
        .lazy(
          () =>
            GradeReportProblemUpdateManyWithoutGradeReportLineNestedInputObjectSchema,
        )
        .optional(),
      gradeReport: z
        .lazy(
          () =>
            GradeReportUpdateOneRequiredWithoutGradeReportLinesNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const GradeReportLineUpdateWithoutGradeReportQuestionsInputObjectSchema =
  Schema;
