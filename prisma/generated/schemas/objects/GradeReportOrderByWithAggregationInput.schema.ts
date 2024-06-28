import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GradeReportCountOrderByAggregateInputObjectSchema } from './GradeReportCountOrderByAggregateInput.schema';
import { GradeReportAvgOrderByAggregateInputObjectSchema } from './GradeReportAvgOrderByAggregateInput.schema';
import { GradeReportMaxOrderByAggregateInputObjectSchema } from './GradeReportMaxOrderByAggregateInput.schema';
import { GradeReportMinOrderByAggregateInputObjectSchema } from './GradeReportMinOrderByAggregateInput.schema';
import { GradeReportSumOrderByAggregateInputObjectSchema } from './GradeReportSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    moocSessionId: z.lazy(() => SortOrderSchema).optional(),
    totalActive: z.lazy(() => SortOrderSchema).optional(),
    totalCurious: z.lazy(() => SortOrderSchema).optional(),
    totalEligible: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    interest: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => GradeReportCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => GradeReportAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => GradeReportMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => GradeReportMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => GradeReportSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const GradeReportOrderByWithAggregationInputObjectSchema = Schema;
