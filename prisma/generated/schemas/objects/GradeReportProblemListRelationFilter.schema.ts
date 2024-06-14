import { z } from 'zod';
import { GradeReportProblemWhereInputObjectSchema } from './GradeReportProblemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemListRelationFilter> = z
  .object({
    every: z.lazy(() => GradeReportProblemWhereInputObjectSchema).optional(),
    some: z.lazy(() => GradeReportProblemWhereInputObjectSchema).optional(),
    none: z.lazy(() => GradeReportProblemWhereInputObjectSchema).optional(),
  })
  .strict();

export const GradeReportProblemListRelationFilterObjectSchema = Schema;
