import { z } from 'zod';
import { GradeReportLineCreateWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportQuestionsInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInput.schema';
import { GradeReportLineCreateOrConnectWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineCreateOrConnectWithoutGradeReportQuestionsInput.schema';
import { GradeReportLineUpsertWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineUpsertWithoutGradeReportQuestionsInput.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineUpdateWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineUpdateWithoutGradeReportQuestionsInput.schema';
import { GradeReportLineUncheckedUpdateWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineUncheckedUpdateWithoutGradeReportQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpdateOneRequiredWithoutGradeReportQuestionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              GradeReportLineCreateWithoutGradeReportQuestionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            GradeReportLineCreateOrConnectWithoutGradeReportQuestionsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            GradeReportLineUpsertWithoutGradeReportQuestionsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => GradeReportLineWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              GradeReportLineUpdateWithoutGradeReportQuestionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportLineUncheckedUpdateWithoutGradeReportQuestionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const GradeReportLineUpdateOneRequiredWithoutGradeReportQuestionsNestedInputObjectSchema =
  Schema;
