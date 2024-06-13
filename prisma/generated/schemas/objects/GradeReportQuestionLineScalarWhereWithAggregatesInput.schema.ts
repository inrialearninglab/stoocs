import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              GradeReportQuestionLineScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionLineScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () =>
            GradeReportQuestionLineScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              GradeReportQuestionLineScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionLineScalarWhereWithAggregatesInputObjectSchema,
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
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      lineID: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const GradeReportQuestionLineScalarWhereWithAggregatesInputObjectSchema =
  Schema;
