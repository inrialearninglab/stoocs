import { z } from 'zod';
import { GradeReportLineCreateWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportProblemsInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportProblemsInput.schema';
import { GradeReportLineCreateOrConnectWithoutGradeReportProblemsInputObjectSchema } from './GradeReportLineCreateOrConnectWithoutGradeReportProblemsInput.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateNestedOneWithoutGradeReportProblemsInput> =
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
      connect: z
        .lazy(() => GradeReportLineWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const GradeReportLineCreateNestedOneWithoutGradeReportProblemsInputObjectSchema =
  Schema;
