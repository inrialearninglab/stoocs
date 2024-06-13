import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GradeReportLineUpdateOneRequiredWithoutGradeReportQuestionLinesNestedInputObjectSchema } from './GradeReportLineUpdateOneRequiredWithoutGradeReportQuestionLinesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineUpdateInput> = z
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
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    gradeReportLine: z
      .lazy(
        () =>
          GradeReportLineUpdateOneRequiredWithoutGradeReportQuestionLinesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportQuestionLineUpdateInputObjectSchema = Schema;
