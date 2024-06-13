import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TeamMemberCountOrderByAggregateInputObjectSchema } from './TeamMemberCountOrderByAggregateInput.schema';
import { TeamMemberMaxOrderByAggregateInputObjectSchema } from './TeamMemberMaxOrderByAggregateInput.schema';
import { TeamMemberMinOrderByAggregateInputObjectSchema } from './TeamMemberMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstname: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TeamMemberCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TeamMemberMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TeamMemberMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TeamMemberOrderByWithAggregationInputObjectSchema = Schema;
