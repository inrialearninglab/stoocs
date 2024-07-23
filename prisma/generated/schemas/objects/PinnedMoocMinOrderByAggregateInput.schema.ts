import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    moocId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PinnedMoocMinOrderByAggregateInputObjectSchema = Schema;
