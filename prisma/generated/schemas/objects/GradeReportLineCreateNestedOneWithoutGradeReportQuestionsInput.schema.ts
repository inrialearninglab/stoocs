import { z } from 'zod';
import { GradeReportLineCreateWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportQuestionsInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInput.schema';
import { GradeReportLineCreateOrConnectWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineCreateOrConnectWithoutGradeReportQuestionsInput.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateNestedOneWithoutGradeReportQuestionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              GradeReportLineCreateWithoutGradeReportQuestionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            GradeReportLineCreateOrConnectWithoutGradeReportQuestionsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => GradeReportLineWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const GradeReportLineCreateNestedOneWithoutGradeReportQuestionsInputObjectSchema =
  Schema;
