import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GradeReportQuestionUpdateManyWithoutGradeReportLineNestedInputObjectSchema } from './GradeReportQuestionUpdateManyWithoutGradeReportLineNestedInput.schema';
import { GradeReportProblemUpdateManyWithoutGradeReportLineNestedInputObjectSchema } from './GradeReportProblemUpdateManyWithoutGradeReportLineNestedInput.schema';
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
    gradeReportQuestions: z
      .lazy(
        () =>
          GradeReportQuestionUpdateManyWithoutGradeReportLineNestedInputObjectSchema,
      )
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

export const GradeReportLineUpdateInputObjectSchema = Schema;
