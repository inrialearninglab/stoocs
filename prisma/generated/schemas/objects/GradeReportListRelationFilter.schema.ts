import { z } from 'zod';
import { GradeReportWhereInputObjectSchema } from './GradeReportWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportListRelationFilter> = z
  .object({
    every: z.lazy(() => GradeReportWhereInputObjectSchema).optional(),
    some: z.lazy(() => GradeReportWhereInputObjectSchema).optional(),
    none: z.lazy(() => GradeReportWhereInputObjectSchema).optional(),
  })
  .strict();

export const GradeReportListRelationFilterObjectSchema = Schema;
