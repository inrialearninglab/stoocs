import { z } from 'zod';
import { GradeReportQuestionLineWhereUniqueInputObjectSchema } from './GradeReportQuestionLineWhereUniqueInput.schema';
import { GradeReportQuestionLineUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUpdateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineUncheckedUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUncheckedUpdateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineCreateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUncheckedCreateWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineUpsertWithWhereUniqueWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            GradeReportQuestionLineUpdateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportQuestionLineUncheckedUpdateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            GradeReportQuestionLineCreateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportQuestionLineUncheckedCreateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportQuestionLineUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema =
  Schema;
