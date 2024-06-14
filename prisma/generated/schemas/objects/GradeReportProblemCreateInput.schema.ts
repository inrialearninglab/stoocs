import { z } from 'zod';
import { GradeReportLineCreateNestedOneWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineCreateNestedOneWithoutGradeReportProblemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemCreateInput> = z
  .object({
    userID: z.number(),
    label: z.string(),
    score: z.number().optional().nullable(),
    possible: z.number().optional().nullable(),
    gradeReportLine: z.lazy(
      () =>
        GradeReportLineCreateNestedOneWithoutGradeReportProblemsInputObjectSchema,
    ),
  })
  .strict();

export const GradeReportProblemCreateInputObjectSchema = Schema;
