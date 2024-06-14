import { z } from 'zod';
import { GradeReportQuestionCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionCreateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUncheckedCreateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionCreateOrConnectWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionCreateOrConnectWithoutGradeReportLineInput.schema';
import { GradeReportQuestionUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUpsertWithWhereUniqueWithoutGradeReportLineInput.schema';
import { GradeReportQuestionCreateManyGradeReportLineInputEnvelopeObjectSchema } from './GradeReportQuestionCreateManyGradeReportLineInputEnvelope.schema';
import { GradeReportQuestionWhereUniqueInputObjectSchema } from './GradeReportQuestionWhereUniqueInput.schema';
import { GradeReportQuestionUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUpdateWithWhereUniqueWithoutGradeReportLineInput.schema';
import { GradeReportQuestionUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUpdateManyWithWhereWithoutGradeReportLineInput.schema';
import { GradeReportQuestionScalarWhereInputObjectSchema } from './GradeReportQuestionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionUpdateManyWithoutGradeReportLineNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              GradeReportQuestionCreateWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionCreateWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              GradeReportQuestionUncheckedCreateWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionUncheckedCreateWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              GradeReportQuestionCreateOrConnectWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionCreateOrConnectWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              GradeReportQuestionUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            GradeReportQuestionCreateManyGradeReportLineInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              GradeReportQuestionUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              GradeReportQuestionUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportQuestionUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => GradeReportQuestionScalarWhereInputObjectSchema),
          z.lazy(() => GradeReportQuestionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const GradeReportQuestionUpdateManyWithoutGradeReportLineNestedInputObjectSchema =
  Schema;
