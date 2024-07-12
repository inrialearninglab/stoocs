import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MoocSessionScalarWhereInputObjectSchema),
        z.lazy(() => MoocSessionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MoocSessionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MoocSessionScalarWhereInputObjectSchema),
        z.lazy(() => MoocSessionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sessionName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    enrollmentsDetails: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
    totalEnrollments: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    startDate: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    endDate: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    ended: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    cutoffs: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    typeID: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    moocID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const MoocSessionScalarWhereInputObjectSchema = Schema;
