import { z } from 'zod';
import { GradeReportLineCreateWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportProblemLinesInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInput.schema';
import { GradeReportLineCreateOrConnectWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineCreateOrConnectWithoutGradeReportProblemLinesInput.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateNestedOneWithoutGradeReportProblemLinesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              GradeReportLineCreateWithoutGradeReportProblemLinesInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            GradeReportLineCreateOrConnectWithoutGradeReportProblemLinesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => GradeReportLineWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const GradeReportLineCreateNestedOneWithoutGradeReportProblemLinesInputObjectSchema =
  Schema;
