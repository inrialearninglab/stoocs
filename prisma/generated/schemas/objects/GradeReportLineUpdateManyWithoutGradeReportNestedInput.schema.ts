import { z } from 'zod';
import { GradeReportLineCreateWithoutGradeReportInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportInput.schema';
import { GradeReportLineCreateOrConnectWithoutGradeReportInputObjectSchema } from './GradeReportLineCreateOrConnectWithoutGradeReportInput.schema';
import { GradeReportLineUpsertWithWhereUniqueWithoutGradeReportInputObjectSchema } from './GradeReportLineUpsertWithWhereUniqueWithoutGradeReportInput.schema';
import { GradeReportLineCreateManyGradeReportInputEnvelopeObjectSchema } from './GradeReportLineCreateManyGradeReportInputEnvelope.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineUpdateWithWhereUniqueWithoutGradeReportInputObjectSchema } from './GradeReportLineUpdateWithWhereUniqueWithoutGradeReportInput.schema';
import { GradeReportLineUpdateManyWithWhereWithoutGradeReportInputObjectSchema } from './GradeReportLineUpdateManyWithWhereWithoutGradeReportInput.schema';
import { GradeReportLineScalarWhereInputObjectSchema } from './GradeReportLineScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpdateManyWithoutGradeReportNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => GradeReportLineCreateWithoutGradeReportInputObjectSchema,
          ),
          z
            .lazy(
              () => GradeReportLineCreateWithoutGradeReportInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              GradeReportLineUncheckedCreateWithoutGradeReportInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportLineUncheckedCreateWithoutGradeReportInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              GradeReportLineCreateOrConnectWithoutGradeReportInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportLineCreateOrConnectWithoutGradeReportInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              GradeReportLineUpsertWithWhereUniqueWithoutGradeReportInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportLineUpsertWithWhereUniqueWithoutGradeReportInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => GradeReportLineCreateManyGradeReportInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              GradeReportLineUpdateWithWhereUniqueWithoutGradeReportInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportLineUpdateWithWhereUniqueWithoutGradeReportInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              GradeReportLineUpdateManyWithWhereWithoutGradeReportInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportLineUpdateManyWithWhereWithoutGradeReportInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => GradeReportLineScalarWhereInputObjectSchema),
          z.lazy(() => GradeReportLineScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const GradeReportLineUpdateManyWithoutGradeReportNestedInputObjectSchema =
  Schema;
