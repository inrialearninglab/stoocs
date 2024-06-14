import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GradeReportQuestionCountOrderByAggregateInputObjectSchema } from './GradeReportQuestionCountOrderByAggregateInput.schema';
import { GradeReportQuestionAvgOrderByAggregateInputObjectSchema } from './GradeReportQuestionAvgOrderByAggregateInput.schema';
import { GradeReportQuestionMaxOrderByAggregateInputObjectSchema } from './GradeReportQuestionMaxOrderByAggregateInput.schema';
import { GradeReportQuestionMinOrderByAggregateInputObjectSchema } from './GradeReportQuestionMinOrderByAggregateInput.schema';
import { GradeReportQuestionSumOrderByAggregateInputObjectSchema } from './GradeReportQuestionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionOrderByWithAggregationInput> =
  z
    .object({
      userID: z.lazy(() => SortOrderSchema).optional(),
      label: z.lazy(() => SortOrderSchema).optional(),
      score: z.lazy(() => SortOrderSchema).optional(),
      lineID: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => GradeReportQuestionCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => GradeReportQuestionAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => GradeReportQuestionMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => GradeReportQuestionMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => GradeReportQuestionSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const GradeReportQuestionOrderByWithAggregationInputObjectSchema =
  Schema;
