import { z } from 'zod';
import { GradeReportLineUpdateWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineUpdateWithoutGradeReportProblemLinesInput.schema';
import { GradeReportLineUncheckedUpdateWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineUncheckedUpdateWithoutGradeReportProblemLinesInput.schema';
import { GradeReportLineCreateWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportProblemLinesInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpsertWithoutGradeReportProblemLinesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            GradeReportLineUpdateWithoutGradeReportProblemLinesInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportLineUncheckedUpdateWithoutGradeReportProblemLinesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            GradeReportLineCreateWithoutGradeReportProblemLinesInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportLineUpsertWithoutGradeReportProblemLinesInputObjectSchema =
  Schema;
