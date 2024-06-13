import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GradeReportScalarWhereInputObjectSchema),
        z.lazy(() => GradeReportScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GradeReportScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GradeReportScalarWhereInputObjectSchema),
        z.lazy(() => GradeReportScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    moocSessionId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const GradeReportScalarWhereInputObjectSchema = Schema;
