import { z } from 'zod';
import { GradeReportProblemCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemCreateWithoutGradeReportLineInput.schema';
import { GradeReportProblemUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUncheckedCreateWithoutGradeReportLineInput.schema';
import { GradeReportProblemCreateOrConnectWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemCreateOrConnectWithoutGradeReportLineInput.schema';
import { GradeReportProblemCreateManyGradeReportLineInputEnvelopeObjectSchema } from './GradeReportProblemCreateManyGradeReportLineInputEnvelope.schema';
import { GradeReportProblemWhereUniqueInputObjectSchema } from './GradeReportProblemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemUncheckedCreateNestedManyWithoutGradeReportLineInput> =
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
      createMany: z
        .lazy(
          () =>
            GradeReportProblemCreateManyGradeReportLineInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const GradeReportProblemUncheckedCreateNestedManyWithoutGradeReportLineInputObjectSchema =
  Schema;
