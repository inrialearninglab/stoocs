import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { GradeReportLineListRelationFilterObjectSchema } from './GradeReportLineListRelationFilter.schema';
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
    gradeReportLines: z
      .lazy(() => GradeReportLineListRelationFilterObjectSchema)
      .optional(),
    MoocSession: z
      .union([
        z.lazy(() => MoocSessionRelationFilterObjectSchema),
        z.lazy(() => MoocSessionWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const GradeReportWhereInputObjectSchema = Schema;
