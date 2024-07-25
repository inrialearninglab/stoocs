import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InvitationCountOrderByAggregateInputObjectSchema } from './InvitationCountOrderByAggregateInput.schema';
import { InvitationMaxOrderByAggregateInputObjectSchema } from './InvitationMaxOrderByAggregateInput.schema';
import { InvitationMinOrderByAggregateInputObjectSchema } from './InvitationMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvitationOrderByWithAggregationInput> = z
  .object({
    tokenHash: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => InvitationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => InvitationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => InvitationMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const InvitationOrderByWithAggregationInputObjectSchema = Schema;
