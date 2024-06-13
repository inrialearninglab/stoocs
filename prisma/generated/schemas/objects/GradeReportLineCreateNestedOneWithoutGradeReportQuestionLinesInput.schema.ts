import { z } from 'zod';
import { GradeReportLineCreateWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportQuestionLinesInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInput.schema';
import { GradeReportLineCreateOrConnectWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineCreateOrConnectWithoutGradeReportQuestionLinesInput.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateNestedOneWithoutGradeReportQuestionLinesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              GradeReportLineCreateWithoutGradeReportQuestionLinesInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            GradeReportLineCreateOrConnectWithoutGradeReportQuestionLinesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => GradeReportLineWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const GradeReportLineCreateNestedOneWithoutGradeReportQuestionLinesInputObjectSchema =
  Schema;
