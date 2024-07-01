import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GradeReportScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => GradeReportScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GradeReportScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GradeReportScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => GradeReportScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    date: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
    moocSessionId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    totalActive: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    totalCurious: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    totalEligible: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    score: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
    interest: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
    threshold: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  })
  .strict();

export const GradeReportScalarWhereWithAggregatesInputObjectSchema = Schema;
