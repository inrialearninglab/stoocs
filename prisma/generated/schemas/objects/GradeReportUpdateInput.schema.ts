import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GradeReportLineUpdateManyWithoutGradeReportNestedInputObjectSchema } from './GradeReportLineUpdateManyWithoutGradeReportNestedInput.schema';
import { MoocSessionUpdateOneRequiredWithoutGradeReportsNestedInputObjectSchema } from './MoocSessionUpdateOneRequiredWithoutGradeReportsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    date: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    gradeReportLines: z
      .lazy(
        () =>
          GradeReportLineUpdateManyWithoutGradeReportNestedInputObjectSchema,
      )
      .optional(),
    moocSession: z
      .lazy(
        () =>
          MoocSessionUpdateOneRequiredWithoutGradeReportsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportUpdateInputObjectSchema = Schema;
