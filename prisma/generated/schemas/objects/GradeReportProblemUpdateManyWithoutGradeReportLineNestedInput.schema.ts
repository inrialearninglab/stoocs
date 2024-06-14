import { z } from 'zod';
import { GradeReportProblemCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemCreateWithoutGradeReportLineInput.schema';
import { GradeReportProblemUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUncheckedCreateWithoutGradeReportLineInput.schema';
import { GradeReportProblemCreateOrConnectWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemCreateOrConnectWithoutGradeReportLineInput.schema';
import { GradeReportProblemUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUpsertWithWhereUniqueWithoutGradeReportLineInput.schema';
import { GradeReportProblemCreateManyGradeReportLineInputEnvelopeObjectSchema } from './GradeReportProblemCreateManyGradeReportLineInputEnvelope.schema';
import { GradeReportProblemWhereUniqueInputObjectSchema } from './GradeReportProblemWhereUniqueInput.schema';
import { GradeReportProblemUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUpdateWithWhereUniqueWithoutGradeReportLineInput.schema';
import { GradeReportProblemUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUpdateManyWithWhereWithoutGradeReportLineInput.schema';
import { GradeReportProblemScalarWhereInputObjectSchema } from './GradeReportProblemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemUpdateManyWithoutGradeReportLineNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              GradeReportProblemCreateWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemCreateWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              GradeReportProblemUncheckedCreateWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemUncheckedCreateWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              GradeReportProblemCreateOrConnectWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemCreateOrConnectWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              GradeReportProblemUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            GradeReportProblemCreateManyGradeReportLineInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              GradeReportProblemUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              GradeReportProblemUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => GradeReportProblemScalarWhereInputObjectSchema),
          z.lazy(() => GradeReportProblemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const GradeReportProblemUpdateManyWithoutGradeReportLineNestedInputObjectSchema =
  Schema;
