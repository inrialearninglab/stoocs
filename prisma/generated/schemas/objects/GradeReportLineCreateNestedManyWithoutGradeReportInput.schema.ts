import { z } from 'zod';
import { GradeReportLineCreateWithoutGradeReportInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportInput.schema';
import { GradeReportLineCreateOrConnectWithoutGradeReportInputObjectSchema } from './GradeReportLineCreateOrConnectWithoutGradeReportInput.schema';
import { GradeReportLineCreateManyGradeReportInputEnvelopeObjectSchema } from './GradeReportLineCreateManyGradeReportInputEnvelope.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateNestedManyWithoutGradeReportInput> =
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
      createMany: z
        .lazy(
          () => GradeReportLineCreateManyGradeReportInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const GradeReportLineCreateNestedManyWithoutGradeReportInputObjectSchema =
  Schema;
