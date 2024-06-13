import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GradeReportQuestionLineCountOrderByAggregateInputObjectSchema } from './GradeReportQuestionLineCountOrderByAggregateInput.schema';
import { GradeReportQuestionLineAvgOrderByAggregateInputObjectSchema } from './GradeReportQuestionLineAvgOrderByAggregateInput.schema';
import { GradeReportQuestionLineMaxOrderByAggregateInputObjectSchema } from './GradeReportQuestionLineMaxOrderByAggregateInput.schema';
import { GradeReportQuestionLineMinOrderByAggregateInputObjectSchema } from './GradeReportQuestionLineMinOrderByAggregateInput.schema';
import { GradeReportQuestionLineSumOrderByAggregateInputObjectSchema } from './GradeReportQuestionLineSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineOrderByWithAggregationInput> =
  z
    .object({
      userID: z.lazy(() => SortOrderSchema).optional(),
      label: z.lazy(() => SortOrderSchema).optional(),
      score: z.lazy(() => SortOrderSchema).optional(),
      lineID: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () => GradeReportQuestionLineCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _avg: z
        .lazy(() => GradeReportQuestionLineAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => GradeReportQuestionLineMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => GradeReportQuestionLineMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => GradeReportQuestionLineSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const GradeReportQuestionLineOrderByWithAggregationInputObjectSchema =
  Schema;
