import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GradeReportQuestionOrderByRelationAggregateInputObjectSchema } from './GradeReportQuestionOrderByRelationAggregateInput.schema';
import { GradeReportProblemOrderByRelationAggregateInputObjectSchema } from './GradeReportProblemOrderByRelationAggregateInput.schema';
import { GradeReportOrderByWithRelationInputObjectSchema } from './GradeReportOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineOrderByWithRelationInput> = z
  .object({
    userID: z.lazy(() => SortOrderSchema).optional(),
    grade: z.lazy(() => SortOrderSchema).optional(),
    certificateEligible: z.lazy(() => SortOrderSchema).optional(),
    certificateDelivered: z.lazy(() => SortOrderSchema).optional(),
    gradeReportID: z.lazy(() => SortOrderSchema).optional(),
    gradeReportQuestions: z
      .lazy(() => GradeReportQuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    gradeReportProblems: z
      .lazy(() => GradeReportProblemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    gradeReport: z
      .lazy(() => GradeReportOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const GradeReportLineOrderByWithRelationInputObjectSchema = Schema;
