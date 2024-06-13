import { z } from 'zod';
import { GradeReportLineWhereInputObjectSchema } from './GradeReportLineWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineListRelationFilter> = z
  .object({
    every: z.lazy(() => GradeReportLineWhereInputObjectSchema).optional(),
    some: z.lazy(() => GradeReportLineWhereInputObjectSchema).optional(),
    none: z.lazy(() => GradeReportLineWhereInputObjectSchema).optional(),
  })
  .strict();

export const GradeReportLineListRelationFilterObjectSchema = Schema;
