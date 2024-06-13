import { z } from 'zod';
import { GradeReportLineUpdateWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineUpdateWithoutGradeReportQuestionLinesInput.schema';
import { GradeReportLineUncheckedUpdateWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineUncheckedUpdateWithoutGradeReportQuestionLinesInput.schema';
import { GradeReportLineCreateWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportQuestionLinesInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpsertWithoutGradeReportQuestionLinesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            GradeReportLineUpdateWithoutGradeReportQuestionLinesInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportLineUncheckedUpdateWithoutGradeReportQuestionLinesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            GradeReportLineCreateWithoutGradeReportQuestionLinesInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportLineUpsertWithoutGradeReportQuestionLinesInputObjectSchema =
  Schema;
