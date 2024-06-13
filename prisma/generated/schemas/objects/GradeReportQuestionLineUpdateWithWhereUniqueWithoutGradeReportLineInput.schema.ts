import { z } from 'zod';
import { GradeReportQuestionLineWhereUniqueInputObjectSchema } from './GradeReportQuestionLineWhereUniqueInput.schema';
import { GradeReportQuestionLineUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUpdateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionLineUncheckedUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionLineUncheckedUpdateWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineUpdateWithWhereUniqueWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportQuestionLineWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            GradeReportQuestionLineUpdateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportQuestionLineUncheckedUpdateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportQuestionLineUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema =
  Schema;
