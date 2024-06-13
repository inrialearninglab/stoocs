import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GradeReportLineUpdateManyWithoutGradeReportNestedInputObjectSchema } from './GradeReportLineUpdateManyWithoutGradeReportNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportUpdateWithoutMoocSessionInput> = z
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
  })
  .strict();

export const GradeReportUpdateWithoutMoocSessionInputObjectSchema = Schema;
