import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    organization: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    courseNumber: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    theme: z.lazy(() => SortOrderSchema).optional(),
    target: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MoocMinOrderByAggregateInputObjectSchema = Schema;
