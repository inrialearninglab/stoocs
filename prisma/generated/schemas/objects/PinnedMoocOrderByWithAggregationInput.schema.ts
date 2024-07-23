import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PinnedMoocCountOrderByAggregateInputObjectSchema } from './PinnedMoocCountOrderByAggregateInput.schema';
import { PinnedMoocMaxOrderByAggregateInputObjectSchema } from './PinnedMoocMaxOrderByAggregateInput.schema';
import { PinnedMoocMinOrderByAggregateInputObjectSchema } from './PinnedMoocMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    moocId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PinnedMoocCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PinnedMoocMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PinnedMoocMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PinnedMoocOrderByWithAggregationInputObjectSchema = Schema;
