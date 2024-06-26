import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GradeReportProblemCountOrderByAggregateInputObjectSchema } from './GradeReportProblemCountOrderByAggregateInput.schema';
import { GradeReportProblemAvgOrderByAggregateInputObjectSchema } from './GradeReportProblemAvgOrderByAggregateInput.schema';
import { GradeReportProblemMaxOrderByAggregateInputObjectSchema } from './GradeReportProblemMaxOrderByAggregateInput.schema';
import { GradeReportProblemMinOrderByAggregateInputObjectSchema } from './GradeReportProblemMinOrderByAggregateInput.schema';
import { GradeReportProblemSumOrderByAggregateInputObjectSchema } from './GradeReportProblemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userID: z.lazy(() => SortOrderSchema).optional(),
      label: z.lazy(() => SortOrderSchema).optional(),
      score: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      possible: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      lineID: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => GradeReportProblemCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => GradeReportProblemAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => GradeReportProblemMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => GradeReportProblemMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => GradeReportProblemSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const GradeReportProblemOrderByWithAggregationInputObjectSchema = Schema;
