import { z } from 'zod';
import { GradeReportQuestionWhereUniqueInputObjectSchema } from './GradeReportQuestionWhereUniqueInput.schema';
import { GradeReportQuestionUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUpdateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionUncheckedUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUncheckedUpdateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionCreateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUncheckedCreateWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionUpsertWithWhereUniqueWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            GradeReportQuestionUpdateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportQuestionUncheckedUpdateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            GradeReportQuestionCreateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportQuestionUncheckedCreateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportQuestionUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema =
  Schema;
