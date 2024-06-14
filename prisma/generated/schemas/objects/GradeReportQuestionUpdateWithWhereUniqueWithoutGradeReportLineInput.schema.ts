import { z } from 'zod';
import { GradeReportQuestionWhereUniqueInputObjectSchema } from './GradeReportQuestionWhereUniqueInput.schema';
import { GradeReportQuestionUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUpdateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionUncheckedUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUncheckedUpdateWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionUpdateWithWhereUniqueWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            GradeReportQuestionUpdateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportQuestionUncheckedUpdateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportQuestionUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema =
  Schema;
