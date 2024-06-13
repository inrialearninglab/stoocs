import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              GradeReportProblemLineScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemLineScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () =>
            GradeReportProblemLineScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              GradeReportProblemLineScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemLineScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      userID: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      label: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      score: z
        .union([
          z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      possible: z
        .union([
          z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      lineID: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const GradeReportProblemLineScalarWhereWithAggregatesInputObjectSchema =
  Schema;
