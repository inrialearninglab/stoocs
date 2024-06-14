import { z } from 'zod';
import { GradeReportLineUpdateWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineUpdateWithoutGradeReportProblemsInput.schema';
import { GradeReportLineUncheckedUpdateWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineUncheckedUpdateWithoutGradeReportProblemsInput.schema';
import { GradeReportLineCreateWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportProblemsInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportProblemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpsertWithoutGradeReportProblemsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            GradeReportLineUpdateWithoutGradeReportProblemsInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportLineUncheckedUpdateWithoutGradeReportProblemsInputObjectSchema,
        ),
      ]),
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

export const GradeReportLineUpsertWithoutGradeReportProblemsInputObjectSchema =
  Schema;
