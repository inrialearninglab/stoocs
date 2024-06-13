import { z } from 'zod';
import { GradeReportProblemLineCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineCreateWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUncheckedCreateWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineCreateOrConnectWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineCreateOrConnectWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUpsertWithWhereUniqueWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineCreateManyGradeReportLineInputEnvelopeObjectSchema } from './GradeReportProblemLineCreateManyGradeReportLineInputEnvelope.schema';
import { GradeReportProblemLineWhereUniqueInputObjectSchema } from './GradeReportProblemLineWhereUniqueInput.schema';
import { GradeReportProblemLineUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUpdateWithWhereUniqueWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUpdateManyWithWhereWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineScalarWhereInputObjectSchema } from './GradeReportProblemLineScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineUpdateManyWithoutGradeReportLineNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              GradeReportProblemLineCreateWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemLineCreateWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              GradeReportProblemLineUncheckedCreateWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemLineUncheckedCreateWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              GradeReportProblemLineCreateOrConnectWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemLineCreateOrConnectWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              GradeReportProblemLineUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemLineUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            GradeReportProblemLineCreateManyGradeReportLineInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema),
          z
            .lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema),
          z
            .lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema),
          z
            .lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema),
          z
            .lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              GradeReportProblemLineUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemLineUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              GradeReportProblemLineUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportProblemLineUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => GradeReportProblemLineScalarWhereInputObjectSchema),
          z
            .lazy(() => GradeReportProblemLineScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const GradeReportProblemLineUpdateManyWithoutGradeReportLineNestedInputObjectSchema =
  Schema;
