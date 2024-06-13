import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { GradeReportLineRelationFilterObjectSchema } from './GradeReportLineRelationFilter.schema';
import { GradeReportLineWhereInputObjectSchema } from './GradeReportLineWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GradeReportProblemLineWhereInputObjectSchema),
        z.lazy(() => GradeReportProblemLineWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GradeReportProblemLineWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GradeReportProblemLineWhereInputObjectSchema),
        z.lazy(() => GradeReportProblemLineWhereInputObjectSchema).array(),
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
    GradeReportLine: z
      .union([
        z.lazy(() => GradeReportLineRelationFilterObjectSchema),
        z.lazy(() => GradeReportLineWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const GradeReportProblemLineWhereInputObjectSchema = Schema;
