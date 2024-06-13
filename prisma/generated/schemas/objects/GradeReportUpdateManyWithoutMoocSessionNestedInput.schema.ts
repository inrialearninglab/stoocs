import { z } from 'zod';
import { GradeReportCreateWithoutMoocSessionInputObjectSchema } from './GradeReportCreateWithoutMoocSessionInput.schema';
import { GradeReportUncheckedCreateWithoutMoocSessionInputObjectSchema } from './GradeReportUncheckedCreateWithoutMoocSessionInput.schema';
import { GradeReportCreateOrConnectWithoutMoocSessionInputObjectSchema } from './GradeReportCreateOrConnectWithoutMoocSessionInput.schema';
import { GradeReportUpsertWithWhereUniqueWithoutMoocSessionInputObjectSchema } from './GradeReportUpsertWithWhereUniqueWithoutMoocSessionInput.schema';
import { GradeReportCreateManyMoocSessionInputEnvelopeObjectSchema } from './GradeReportCreateManyMoocSessionInputEnvelope.schema';
import { GradeReportWhereUniqueInputObjectSchema } from './GradeReportWhereUniqueInput.schema';
import { GradeReportUpdateWithWhereUniqueWithoutMoocSessionInputObjectSchema } from './GradeReportUpdateWithWhereUniqueWithoutMoocSessionInput.schema';
import { GradeReportUpdateManyWithWhereWithoutMoocSessionInputObjectSchema } from './GradeReportUpdateManyWithWhereWithoutMoocSessionInput.schema';
import { GradeReportScalarWhereInputObjectSchema } from './GradeReportScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportUpdateManyWithoutMoocSessionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GradeReportCreateWithoutMoocSessionInputObjectSchema),
          z
            .lazy(() => GradeReportCreateWithoutMoocSessionInputObjectSchema)
            .array(),
          z.lazy(
            () => GradeReportUncheckedCreateWithoutMoocSessionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportUncheckedCreateWithoutMoocSessionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => GradeReportCreateOrConnectWithoutMoocSessionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportCreateOrConnectWithoutMoocSessionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              GradeReportUpsertWithWhereUniqueWithoutMoocSessionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportUpsertWithWhereUniqueWithoutMoocSessionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => GradeReportCreateManyMoocSessionInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => GradeReportWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => GradeReportWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => GradeReportWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => GradeReportWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              GradeReportUpdateWithWhereUniqueWithoutMoocSessionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportUpdateWithWhereUniqueWithoutMoocSessionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              GradeReportUpdateManyWithWhereWithoutMoocSessionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportUpdateManyWithWhereWithoutMoocSessionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => GradeReportScalarWhereInputObjectSchema),
          z.lazy(() => GradeReportScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const GradeReportUpdateManyWithoutMoocSessionNestedInputObjectSchema =
  Schema;
