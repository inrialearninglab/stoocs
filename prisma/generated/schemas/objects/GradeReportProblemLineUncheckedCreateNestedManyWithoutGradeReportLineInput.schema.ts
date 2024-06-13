import { z } from 'zod';
import { GradeReportProblemLineCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineCreateWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUncheckedCreateWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineCreateOrConnectWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineCreateOrConnectWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineCreateManyGradeReportLineInputEnvelopeObjectSchema } from './GradeReportProblemLineCreateManyGradeReportLineInputEnvelope.schema';
import { GradeReportProblemLineWhereUniqueInputObjectSchema } from './GradeReportProblemLineWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineUncheckedCreateNestedManyWithoutGradeReportLineInput> =
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
      createMany: z
        .lazy(
          () =>
            GradeReportProblemLineCreateManyGradeReportLineInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema),
          z
            .lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const GradeReportProblemLineUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema =
  Schema;
