import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemAvgOrderByAggregateInput> = z
  .object({
    userID: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    possible: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const GradeReportProblemAvgOrderByAggregateInputObjectSchema = Schema;
