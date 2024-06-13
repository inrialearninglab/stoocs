import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.MoocSessionCreateManyTypeInput> = z
  .object({
    id: z.string().optional(),
    sessionName: z.string(),
    enrollmentsDetails: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    totalEnrollments: z.number().optional(),
    platformID: z.string(),
    moocID: z.string(),
  })
  .strict();

export const MoocSessionCreateManyTypeInputObjectSchema = Schema;
