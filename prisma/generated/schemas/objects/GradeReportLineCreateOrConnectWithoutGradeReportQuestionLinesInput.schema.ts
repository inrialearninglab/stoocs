import { z } from 'zod';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineCreateWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportQuestionLinesInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateOrConnectWithoutGradeReportQuestionLinesInput> =
  z
    .object({
      where: z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            GradeReportLineCreateWithoutGradeReportQuestionLinesInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportLineUncheckedCreateWithoutGradeReportQuestionLinesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportLineCreateOrConnectWithoutGradeReportQuestionLinesInputObjectSchema =
  Schema;
