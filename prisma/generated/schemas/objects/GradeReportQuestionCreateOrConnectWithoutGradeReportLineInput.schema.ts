import { z } from 'zod';
import { GradeReportQuestionWhereUniqueInputObjectSchema } from './GradeReportQuestionWhereUniqueInput.schema';
import { GradeReportQuestionCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionCreateWithoutGradeReportLineInput.schema';
import { GradeReportQuestionUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportQuestionUncheckedCreateWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionCreateOrConnectWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportQuestionWhereUniqueInputObjectSchema),
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

export const GradeReportQuestionCreateOrConnectWithoutGradeReportLineInputObjectSchema =
  Schema;
