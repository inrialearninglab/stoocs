import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { GradeReportLineUpdateOneRequiredWithoutGradeReportProblemLinesNestedInputObjectSchema } from './GradeReportLineUpdateOneRequiredWithoutGradeReportProblemLinesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineUpdateInput> = z
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
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    possible: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    GradeReportLine: z
      .lazy(
        () =>
          GradeReportLineUpdateOneRequiredWithoutGradeReportProblemLinesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportProblemLineUpdateInputObjectSchema = Schema;
