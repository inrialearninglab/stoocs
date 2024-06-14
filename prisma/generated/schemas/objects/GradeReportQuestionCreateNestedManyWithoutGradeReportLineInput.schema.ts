import { z } from 'zod';
import { GradeReportQuestionCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionCreateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUncheckedCreateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionCreateOrConnectWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionCreateOrConnectWithoutGradeReportLineInput.schema';
import { GradeReportQuestionCreateManyGradeReportLineInputEnvelopeObjectSchema } from './GradeReportQuestionCreateManyGradeReportLineInputEnvelope.schema';
import { GradeReportQuestionWhereUniqueInputObjectSchema } from './GradeReportQuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionCreateNestedManyWithoutGradeReportLineInput> =
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
      createMany: z
        .lazy(
          () =>
            GradeReportQuestionCreateManyGradeReportLineInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const GradeReportQuestionCreateNestedManyWithoutGradeReportLineInputObjectSchema =
  Schema;
