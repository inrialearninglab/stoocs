import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sessionName: z.lazy(() => SortOrderSchema).optional(),
    totalEnrollments: z.lazy(() => SortOrderSchema).optional(),
    platformID: z.lazy(() => SortOrderSchema).optional(),
    typeID: z.lazy(() => SortOrderSchema).optional(),
    moocID: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MoocSessionMaxOrderByAggregateInputObjectSchema = Schema;
