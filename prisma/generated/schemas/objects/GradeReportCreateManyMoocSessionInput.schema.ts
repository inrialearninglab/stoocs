import { z } from 'zod';
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

const Schema: z.ZodType<Prisma.GradeReportCreateManyMoocSessionInput> = z
  .object({
    id: z.string().optional(),
    date: z.coerce.date().optional(),
    totalActive: z.number(),
    totalCurious: z.number(),
    totalEligible: z.number(),
    score: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    interest: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    threshold: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
  })
  .strict();

export const GradeReportCreateManyMoocSessionInputObjectSchema = Schema;
