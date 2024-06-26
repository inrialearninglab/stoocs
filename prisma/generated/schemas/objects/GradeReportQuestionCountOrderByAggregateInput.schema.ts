import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userID: z.lazy(() => SortOrderSchema).optional(),
      label: z.lazy(() => SortOrderSchema).optional(),
      score: z.lazy(() => SortOrderSchema).optional(),
      lineID: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const GradeReportQuestionCountOrderByAggregateInputObjectSchema = Schema;
