import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sessionName: z.lazy(() => SortOrderSchema).optional(),
    totalEnrollments: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.lazy(() => SortOrderSchema).optional(),
    ended: z.lazy(() => SortOrderSchema).optional(),
    cutoffs: z.lazy(() => SortOrderSchema).optional(),
    typeID: z.lazy(() => SortOrderSchema).optional(),
    moocID: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MoocSessionMinOrderByAggregateInputObjectSchema = Schema;
