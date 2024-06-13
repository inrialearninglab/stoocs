import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GradeReportLineOrderByWithRelationInputObjectSchema } from './GradeReportLineOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineOrderByWithRelationInput> =
  z
    .object({
      userID: z.lazy(() => SortOrderSchema).optional(),
      label: z.lazy(() => SortOrderSchema).optional(),
      score: z.lazy(() => SortOrderSchema).optional(),
      lineID: z.lazy(() => SortOrderSchema).optional(),
      GradeReportLine: z
        .lazy(() => GradeReportLineOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();

export const GradeReportQuestionLineOrderByWithRelationInputObjectSchema =
  Schema;
