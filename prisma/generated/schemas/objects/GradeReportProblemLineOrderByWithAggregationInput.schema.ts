import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GradeReportProblemLineCountOrderByAggregateInputObjectSchema } from './GradeReportProblemLineCountOrderByAggregateInput.schema';
import { GradeReportProblemLineAvgOrderByAggregateInputObjectSchema } from './GradeReportProblemLineAvgOrderByAggregateInput.schema';
import { GradeReportProblemLineMaxOrderByAggregateInputObjectSchema } from './GradeReportProblemLineMaxOrderByAggregateInput.schema';
import { GradeReportProblemLineMinOrderByAggregateInputObjectSchema } from './GradeReportProblemLineMinOrderByAggregateInput.schema';
import { GradeReportProblemLineSumOrderByAggregateInputObjectSchema } from './GradeReportProblemLineSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineOrderByWithAggregationInput> =
  z
    .object({
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
        .lazy(
          () => GradeReportProblemLineCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _avg: z
        .lazy(() => GradeReportProblemLineAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => GradeReportProblemLineMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => GradeReportProblemLineMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => GradeReportProblemLineSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const GradeReportProblemLineOrderByWithAggregationInputObjectSchema =
  Schema;
