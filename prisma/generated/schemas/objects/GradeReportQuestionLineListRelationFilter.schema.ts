import { z } from 'zod';
import { GradeReportQuestionLineWhereInputObjectSchema } from './GradeReportQuestionLineWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineListRelationFilter> = z
  .object({
    every: z
      .lazy(() => GradeReportQuestionLineWhereInputObjectSchema)
      .optional(),
    some: z
      .lazy(() => GradeReportQuestionLineWhereInputObjectSchema)
      .optional(),
    none: z
      .lazy(() => GradeReportQuestionLineWhereInputObjectSchema)
      .optional(),
  })
  .strict();

export const GradeReportQuestionLineListRelationFilterObjectSchema = Schema;
