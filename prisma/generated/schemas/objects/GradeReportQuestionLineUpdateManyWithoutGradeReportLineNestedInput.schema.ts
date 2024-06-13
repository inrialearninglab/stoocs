import { z } from 'zod';
import { GradeReportQuestionLineCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineCreateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUncheckedCreateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineCreateOrConnectWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineCreateOrConnectWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUpsertWithWhereUniqueWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineCreateManyGradeReportLineInputEnvelopeObjectSchema } from './GradeReportQuestionLineCreateManyGradeReportLineInputEnvelope.schema';
import { GradeReportQuestionLineWhereUniqueInputObjectSchema } from './GradeReportQuestionLineWhereUniqueInput.schema';
import { GradeReportQuestionLineUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUpdateWithWhereUniqueWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUpdateManyWithWhereWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineScalarWhereInputObjectSchema } from './GradeReportQuestionLineScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineUpdateManyWithoutGradeReportLineNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              GradeReportQuestionLineCreateWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionLineCreateWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              GradeReportQuestionLineUncheckedCreateWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionLineUncheckedCreateWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              GradeReportQuestionLineCreateOrConnectWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionLineCreateOrConnectWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              GradeReportQuestionLineUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionLineUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            GradeReportQuestionLineCreateManyGradeReportLineInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema),
          z
            .lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema),
          z
            .lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema),
          z
            .lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema),
          z
            .lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              GradeReportQuestionLineUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionLineUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              GradeReportQuestionLineUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionLineUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => GradeReportQuestionLineScalarWhereInputObjectSchema),
          z
            .lazy(() => GradeReportQuestionLineScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const GradeReportQuestionLineUpdateManyWithoutGradeReportLineNestedInputObjectSchema =
  Schema;
