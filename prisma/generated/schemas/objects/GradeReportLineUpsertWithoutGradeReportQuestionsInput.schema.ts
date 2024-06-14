import { z } from 'zod';
import { GradeReportLineUpdateWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineUpdateWithoutGradeReportQuestionsInput.schema';
import { GradeReportLineUncheckedUpdateWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineUncheckedUpdateWithoutGradeReportQuestionsInput.schema';
import { GradeReportLineCreateWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportQuestionsInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpsertWithoutGradeReportQuestionsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            GradeReportLineUpdateWithoutGradeReportQuestionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportLineUncheckedUpdateWithoutGradeReportQuestionsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            GradeReportLineCreateWithoutGradeReportQuestionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportLineUpsertWithoutGradeReportQuestionsInputObjectSchema =
  Schema;
