import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GradeReportQuestionLineUpdateManyWithoutGradeReportLineNestedInputObjectSchema } from './GradeReportQuestionLineUpdateManyWithoutGradeReportLineNestedInput.schema';
import { GradeReportProblemLineUpdateManyWithoutGradeReportLineNestedInputObjectSchema } from './GradeReportProblemLineUpdateManyWithoutGradeReportLineNestedInput.schema';
import { GradeReportUpdateOneRequiredWithoutGradeReportLinesNestedInputObjectSchema } from './GradeReportUpdateOneRequiredWithoutGradeReportLinesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpdateInput> = z
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
    gradeReportProblemLines: z
      .lazy(
        () =>
          GradeReportProblemLineUpdateManyWithoutGradeReportLineNestedInputObjectSchema,
      )
      .optional(),
    GradeReport: z
      .lazy(
        () =>
          GradeReportUpdateOneRequiredWithoutGradeReportLinesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportLineUpdateInputObjectSchema = Schema;
