import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SessionTypeCountOrderByAggregateInputObjectSchema } from './SessionTypeCountOrderByAggregateInput.schema';
import { SessionTypeMaxOrderByAggregateInputObjectSchema } from './SessionTypeMaxOrderByAggregateInput.schema';
import { SessionTypeMinOrderByAggregateInputObjectSchema } from './SessionTypeMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SessionTypeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => SessionTypeMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => SessionTypeMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SessionTypeOrderByWithAggregationInputObjectSchema = Schema;
