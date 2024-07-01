import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

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
    totalActive: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    totalCurious: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    totalEligible: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    score: z
      .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
      .optional(),
    interest: z
      .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
      .optional(),
    threshold: z
      .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
      .optional(),
  })
  .strict();

export const GradeReportUpdateWithoutMoocSessionInputObjectSchema = Schema;
