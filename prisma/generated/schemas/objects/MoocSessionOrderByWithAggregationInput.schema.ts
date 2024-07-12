import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MoocSessionCountOrderByAggregateInputObjectSchema } from './MoocSessionCountOrderByAggregateInput.schema';
import { MoocSessionAvgOrderByAggregateInputObjectSchema } from './MoocSessionAvgOrderByAggregateInput.schema';
import { MoocSessionMaxOrderByAggregateInputObjectSchema } from './MoocSessionMaxOrderByAggregateInput.schema';
import { MoocSessionMinOrderByAggregateInputObjectSchema } from './MoocSessionMinOrderByAggregateInput.schema';
import { MoocSessionSumOrderByAggregateInputObjectSchema } from './MoocSessionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sessionName: z.lazy(() => SortOrderSchema).optional(),
    enrollmentsDetails: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    totalEnrollments: z.lazy(() => SortOrderSchema).optional(),
    startDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    endDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    ended: z.lazy(() => SortOrderSchema).optional(),
    cutoffs: z.lazy(() => SortOrderSchema).optional(),
    typeID: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    moocID: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MoocSessionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => MoocSessionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MoocSessionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MoocSessionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => MoocSessionSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MoocSessionOrderByWithAggregationInputObjectSchema = Schema;
