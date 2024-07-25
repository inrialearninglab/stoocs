import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvitationMinOrderByAggregateInput> = z
  .object({
    tokenHash: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const InvitationMinOrderByAggregateInputObjectSchema = Schema;
