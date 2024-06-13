import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GradeReportProblemLineScalarWhereInputObjectSchema),
        z
          .lazy(() => GradeReportProblemLineScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GradeReportProblemLineScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GradeReportProblemLineScalarWhereInputObjectSchema),
        z
          .lazy(() => GradeReportProblemLineScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    userID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    label: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    score: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    possible: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    lineID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const GradeReportProblemLineScalarWhereInputObjectSchema = Schema;
