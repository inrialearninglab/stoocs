import { z } from 'zod';
import { GradeReportLineWhereInputObjectSchema } from './GradeReportLineWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineRelationFilter> = z
  .object({
    is: z
      .lazy(() => GradeReportLineWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => GradeReportLineWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const GradeReportLineRelationFilterObjectSchema = Schema;
