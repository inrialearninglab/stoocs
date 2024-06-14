import { z } from 'zod';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineCreateWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportQuestionsInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateOrConnectWithoutGradeReportQuestionsInput> =
  z
    .object({
      where: z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            GradeReportLineCreateWithoutGradeReportQuestionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportLineUncheckedCreateWithoutGradeReportQuestionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportLineCreateOrConnectWithoutGradeReportQuestionsInputObjectSchema =
  Schema;
