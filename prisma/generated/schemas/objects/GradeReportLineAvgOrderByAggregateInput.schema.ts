import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineAvgOrderByAggregateInput> = z
  .object({
    userID: z.lazy(() => SortOrderSchema).optional(),
    grade: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const GradeReportLineAvgOrderByAggregateInputObjectSchema = Schema;
