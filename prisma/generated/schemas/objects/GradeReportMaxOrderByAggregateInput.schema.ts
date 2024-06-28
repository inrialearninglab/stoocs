import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    moocSessionId: z.lazy(() => SortOrderSchema).optional(),
    totalActive: z.lazy(() => SortOrderSchema).optional(),
    totalCurious: z.lazy(() => SortOrderSchema).optional(),
    totalEligible: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const GradeReportMaxOrderByAggregateInputObjectSchema = Schema;
