import { z } from 'zod';
import { GradeReportQuestionLineWhereUniqueInputObjectSchema } from './GradeReportQuestionLineWhereUniqueInput.schema';
import { GradeReportQuestionLineCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineCreateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUncheckedCreateWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineCreateOrConnectWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            GradeReportQuestionLineCreateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportQuestionLineUncheckedCreateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportQuestionLineCreateOrConnectWithoutGradeReportLineInputObjectSchema =
  Schema;
