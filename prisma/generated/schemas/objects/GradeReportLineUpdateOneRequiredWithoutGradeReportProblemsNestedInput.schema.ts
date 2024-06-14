import { z } from 'zod';
import { GradeReportLineCreateWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportProblemsInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportProblemsInput.schema';
import { GradeReportLineCreateOrConnectWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineCreateOrConnectWithoutGradeReportProblemsInput.schema';
import { GradeReportLineUpsertWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineUpsertWithoutGradeReportProblemsInput.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineUpdateWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineUpdateWithoutGradeReportProblemsInput.schema';
import { GradeReportLineUncheckedUpdateWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineUncheckedUpdateWithoutGradeReportProblemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpdateOneRequiredWithoutGradeReportProblemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              GradeReportLineCreateWithoutGradeReportProblemsInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportLineUncheckedCreateWithoutGradeReportProblemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            GradeReportLineCreateOrConnectWithoutGradeReportProblemsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            GradeReportLineUpsertWithoutGradeReportProblemsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => GradeReportLineWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              GradeReportLineUpdateWithoutGradeReportProblemsInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportLineUncheckedUpdateWithoutGradeReportProblemsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const GradeReportLineUpdateOneRequiredWithoutGradeReportProblemsNestedInputObjectSchema =
  Schema;
