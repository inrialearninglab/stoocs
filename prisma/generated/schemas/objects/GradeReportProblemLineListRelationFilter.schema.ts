import { z } from 'zod';
import { GradeReportProblemLineWhereInputObjectSchema } from './GradeReportProblemLineWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineListRelationFilter> = z
  .object({
    every: z
      .lazy(() => GradeReportProblemLineWhereInputObjectSchema)
      .optional(),
    some: z.lazy(() => GradeReportProblemLineWhereInputObjectSchema).optional(),
    none: z.lazy(() => GradeReportProblemLineWhereInputObjectSchema).optional(),
  })
  .strict();

export const GradeReportProblemLineListRelationFilterObjectSchema = Schema;
