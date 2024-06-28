import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { MoocSessionRelationFilterObjectSchema } from './MoocSessionRelationFilter.schema';
import { MoocSessionWhereInputObjectSchema } from './MoocSessionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GradeReportWhereInputObjectSchema),
        z.lazy(() => GradeReportWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GradeReportWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GradeReportWhereInputObjectSchema),
        z.lazy(() => GradeReportWhereInputObjectSchema).array(),
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
    totalActive: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    totalCurious: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    totalEligible: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    score: z.lazy(() => JsonFilterObjectSchema).optional(),
    interest: z.lazy(() => JsonFilterObjectSchema).optional(),
    moocSession: z
      .union([
        z.lazy(() => MoocSessionRelationFilterObjectSchema),
        z.lazy(() => MoocSessionWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const GradeReportWhereInputObjectSchema = Schema;
