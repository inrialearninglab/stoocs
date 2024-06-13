import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MoocSessionOrderByRelationAggregateInputObjectSchema } from './MoocSessionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    MoocSession: z
      .lazy(() => MoocSessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SessionTypeOrderByWithRelationInputObjectSchema = Schema;
