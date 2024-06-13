import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GradeReportLineUncheckedUpdateManyWithoutGradeReportNestedInputObjectSchema } from './GradeReportLineUncheckedUpdateManyWithoutGradeReportNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportUncheckedUpdateWithoutMoocSessionInput> =
  z
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
            GradeReportLineUncheckedUpdateManyWithoutGradeReportNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const GradeReportUncheckedUpdateWithoutMoocSessionInputObjectSchema =
  Schema;
