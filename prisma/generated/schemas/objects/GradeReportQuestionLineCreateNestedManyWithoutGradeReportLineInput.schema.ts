import { z } from 'zod';
import { GradeReportQuestionLineCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineCreateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUncheckedCreateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineCreateOrConnectWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineCreateOrConnectWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineCreateManyGradeReportLineInputEnvelopeObjectSchema } from './GradeReportQuestionLineCreateManyGradeReportLineInputEnvelope.schema';
import { GradeReportQuestionLineWhereUniqueInputObjectSchema } from './GradeReportQuestionLineWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineCreateNestedManyWithoutGradeReportLineInput> =
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
      createMany: z
        .lazy(
          () =>
            GradeReportQuestionLineCreateManyGradeReportLineInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema),
          z
            .lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const GradeReportQuestionLineCreateNestedManyWithoutGradeReportLineInputObjectSchema =
  Schema;
