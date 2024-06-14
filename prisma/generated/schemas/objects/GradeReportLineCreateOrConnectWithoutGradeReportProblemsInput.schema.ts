import { z } from 'zod';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineCreateWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportProblemsInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportProblemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateOrConnectWithoutGradeReportProblemsInput> =
  z
    .object({
      where: z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            GradeReportLineCreateWithoutGradeReportProblemsInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportLineUncheckedCreateWithoutGradeReportProblemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportLineCreateOrConnectWithoutGradeReportProblemsInputObjectSchema =
  Schema;
