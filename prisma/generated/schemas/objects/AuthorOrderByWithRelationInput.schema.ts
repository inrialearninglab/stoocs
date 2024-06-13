import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MoocSessionOrderByRelationAggregateInputObjectSchema } from './MoocSessionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstname: z.lazy(() => SortOrderSchema).optional(),
    lastname: z.lazy(() => SortOrderSchema).optional(),
    sessions: z
      .lazy(() => MoocSessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AuthorOrderByWithRelationInputObjectSchema = Schema;
