import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GradeReportLineOrderByWithRelationInputObjectSchema } from './GradeReportLineOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineOrderByWithRelationInput> =
  z
    .object({
      userID: z.lazy(() => SortOrderSchema).optional(),
      label: z.lazy(() => SortOrderSchema).optional(),
      score: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      possible: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      lineID: z.lazy(() => SortOrderSchema).optional(),
      gradeReportLine: z
        .lazy(() => GradeReportLineOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();

export const GradeReportProblemLineOrderByWithRelationInputObjectSchema =
  Schema;
