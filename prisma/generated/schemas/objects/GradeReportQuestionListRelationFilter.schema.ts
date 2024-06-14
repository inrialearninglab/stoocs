import { z } from 'zod';
import { GradeReportQuestionWhereInputObjectSchema } from './GradeReportQuestionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionListRelationFilter> = z
  .object({
    every: z.lazy(() => GradeReportQuestionWhereInputObjectSchema).optional(),
    some: z.lazy(() => GradeReportQuestionWhereInputObjectSchema).optional(),
    none: z.lazy(() => GradeReportQuestionWhereInputObjectSchema).optional(),
  })
  .strict();

export const GradeReportQuestionListRelationFilterObjectSchema = Schema;
