import { z } from 'zod';
import { GradeReportLineCreateNestedOneWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineCreateNestedOneWithoutGradeReportProblemLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineCreateInput> = z
  .object({
    userID: z.number(),
    label: z.string(),
    score: z.number().optional().nullable(),
    possible: z.number().optional().nullable(),
    GradeReportLine: z.lazy(
      () =>
        GradeReportLineCreateNestedOneWithoutGradeReportProblemLinesInputObjectSchema,
    ),
  })
  .strict();

export const GradeReportProblemLineCreateInputObjectSchema = Schema;
