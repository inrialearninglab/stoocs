import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GradeReportQuestionLineUpdateManyWithoutGradeReportLineNestedInputObjectSchema } from './GradeReportQuestionLineUpdateManyWithoutGradeReportLineNestedInput.schema';
import { GradeReportUpdateOneRequiredWithoutGradeReportLinesNestedInputObjectSchema } from './GradeReportUpdateOneRequiredWithoutGradeReportLinesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpdateWithoutGradeReportProblemLinesInput> =
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
      gradeReportQuestionLines: z
        .lazy(
          () =>
            GradeReportQuestionLineUpdateManyWithoutGradeReportLineNestedInputObjectSchema,
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

export const GradeReportLineUpdateWithoutGradeReportProblemLinesInputObjectSchema =
  Schema;
