import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { GradeReportLineUpdateOneRequiredWithoutGradeReportQuestionsNestedInputObjectSchema } from './GradeReportLineUpdateOneRequiredWithoutGradeReportQuestionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionUpdateInput> = z
  .object({
    userID: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    label: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    score: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    gradeReportLine: z
      .lazy(
        () =>
          GradeReportLineUpdateOneRequiredWithoutGradeReportQuestionsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportQuestionUpdateInputObjectSchema = Schema;
