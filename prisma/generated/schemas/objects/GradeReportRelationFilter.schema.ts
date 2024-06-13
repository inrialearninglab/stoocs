import { z } from 'zod';
import { GradeReportWhereInputObjectSchema } from './GradeReportWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportRelationFilter> = z
  .object({
    is: z
      .lazy(() => GradeReportWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => GradeReportWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const GradeReportRelationFilterObjectSchema = Schema;
