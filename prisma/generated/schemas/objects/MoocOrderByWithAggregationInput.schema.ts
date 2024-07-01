import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MoocCountOrderByAggregateInputObjectSchema } from './MoocCountOrderByAggregateInput.schema';
import { MoocMaxOrderByAggregateInputObjectSchema } from './MoocMaxOrderByAggregateInput.schema';
import { MoocMinOrderByAggregateInputObjectSchema } from './MoocMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    organization: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    courseNumber: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    theme: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    target: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => MoocCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => MoocMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MoocMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MoocOrderByWithAggregationInputObjectSchema = Schema;
