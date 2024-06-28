import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportAvgOrderByAggregateInput> = z
  .object({
    totalActive: z.lazy(() => SortOrderSchema).optional(),
    totalCurious: z.lazy(() => SortOrderSchema).optional(),
    totalEligible: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const GradeReportAvgOrderByAggregateInputObjectSchema = Schema;
