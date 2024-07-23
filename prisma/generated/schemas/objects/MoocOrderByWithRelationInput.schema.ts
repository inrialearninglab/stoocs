import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MoocSessionOrderByRelationAggregateInputObjectSchema } from './MoocSessionOrderByRelationAggregateInput.schema';
import { PinnedMoocOrderByRelationAggregateInputObjectSchema } from './PinnedMoocOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocOrderByWithRelationInput> = z
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
    sessions: z
      .lazy(() => MoocSessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    pinnedBy: z
      .lazy(() => PinnedMoocOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MoocOrderByWithRelationInputObjectSchema = Schema;
