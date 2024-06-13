import { z } from 'zod';
import { GradeReportLineCreateWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportQuestionLinesInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInput.schema';
import { GradeReportLineCreateOrConnectWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineCreateOrConnectWithoutGradeReportQuestionLinesInput.schema';
import { GradeReportLineUpsertWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineUpsertWithoutGradeReportQuestionLinesInput.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineUpdateWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineUpdateWithoutGradeReportQuestionLinesInput.schema';
import { GradeReportLineUncheckedUpdateWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineUncheckedUpdateWithoutGradeReportQuestionLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpdateOneRequiredWithoutGradeReportQuestionLinesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              GradeReportLineCreateWithoutGradeReportQuestionLinesInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            GradeReportLineCreateOrConnectWithoutGradeReportQuestionLinesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            GradeReportLineUpsertWithoutGradeReportQuestionLinesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => GradeReportLineWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              GradeReportLineUpdateWithoutGradeReportQuestionLinesInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportLineUncheckedUpdateWithoutGradeReportQuestionLinesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const GradeReportLineUpdateOneRequiredWithoutGradeReportQuestionLinesNestedInputObjectSchema =
  Schema;
