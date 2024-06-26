import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userID: z.lazy(() => SortOrderSchema).optional(),
    grade: z.lazy(() => SortOrderSchema).optional(),
    certificateEligible: z.lazy(() => SortOrderSchema).optional(),
    certificateDelivered: z.lazy(() => SortOrderSchema).optional(),
    gradeReportID: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const GradeReportLineCountOrderByAggregateInputObjectSchema = Schema;
