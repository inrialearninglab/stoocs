import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionSumOrderByAggregateInput> = z
  .object({
    totalEnrollments: z.lazy(() => SortOrderSchema).optional(),
    cutoffs: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MoocSessionSumOrderByAggregateInputObjectSchema = Schema;
