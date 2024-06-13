import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GradeReportLineCountOrderByAggregateInputObjectSchema } from './GradeReportLineCountOrderByAggregateInput.schema';
import { GradeReportLineAvgOrderByAggregateInputObjectSchema } from './GradeReportLineAvgOrderByAggregateInput.schema';
import { GradeReportLineMaxOrderByAggregateInputObjectSchema } from './GradeReportLineMaxOrderByAggregateInput.schema';
import { GradeReportLineMinOrderByAggregateInputObjectSchema } from './GradeReportLineMinOrderByAggregateInput.schema';
import { GradeReportLineSumOrderByAggregateInputObjectSchema } from './GradeReportLineSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineOrderByWithAggregationInput> = z
  .object({
    userID: z.lazy(() => SortOrderSchema).optional(),
    grade: z.lazy(() => SortOrderSchema).optional(),
    certificateEligible: z.lazy(() => SortOrderSchema).optional(),
    certificateDelivered: z.lazy(() => SortOrderSchema).optional(),
    gradeReportID: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => GradeReportLineCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => GradeReportLineAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => GradeReportLineMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => GradeReportLineMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => GradeReportLineSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const GradeReportLineOrderByWithAggregationInputObjectSchema = Schema;
