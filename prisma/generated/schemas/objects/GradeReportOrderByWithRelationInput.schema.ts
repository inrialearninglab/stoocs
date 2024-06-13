import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GradeReportLineOrderByRelationAggregateInputObjectSchema } from './GradeReportLineOrderByRelationAggregateInput.schema';
import { MoocSessionOrderByWithRelationInputObjectSchema } from './MoocSessionOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    moocSessionId: z.lazy(() => SortOrderSchema).optional(),
    gradeReportLines: z
      .lazy(() => GradeReportLineOrderByRelationAggregateInputObjectSchema)
      .optional(),
    MoocSession: z
      .lazy(() => MoocSessionOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const GradeReportOrderByWithRelationInputObjectSchema = Schema;
