import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GradeReportQuestionLineOrderByRelationAggregateInputObjectSchema } from './GradeReportQuestionLineOrderByRelationAggregateInput.schema';
import { GradeReportProblemLineOrderByRelationAggregateInputObjectSchema } from './GradeReportProblemLineOrderByRelationAggregateInput.schema';
import { GradeReportOrderByWithRelationInputObjectSchema } from './GradeReportOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineOrderByWithRelationInput> = z
  .object({
    userID: z.lazy(() => SortOrderSchema).optional(),
    grade: z.lazy(() => SortOrderSchema).optional(),
    certificateEligible: z.lazy(() => SortOrderSchema).optional(),
    certificateDelivered: z.lazy(() => SortOrderSchema).optional(),
    gradeReportID: z.lazy(() => SortOrderSchema).optional(),
    gradeReportQuestionLines: z
      .lazy(
        () => GradeReportQuestionLineOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
    gradeReportProblemLines: z
      .lazy(
        () => GradeReportProblemLineOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
    gradeReport: z
      .lazy(() => GradeReportOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const GradeReportLineOrderByWithRelationInputObjectSchema = Schema;
