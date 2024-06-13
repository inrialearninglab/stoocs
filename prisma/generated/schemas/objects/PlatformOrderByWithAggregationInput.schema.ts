import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlatformCountOrderByAggregateInputObjectSchema } from './PlatformCountOrderByAggregateInput.schema';
import { PlatformMaxOrderByAggregateInputObjectSchema } from './PlatformMaxOrderByAggregateInput.schema';
import { PlatformMinOrderByAggregateInputObjectSchema } from './PlatformMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PlatformOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PlatformCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => PlatformMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PlatformMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PlatformOrderByWithAggregationInputObjectSchema = Schema;
