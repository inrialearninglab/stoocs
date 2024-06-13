import { z } from 'zod';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineCreateWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportProblemLinesInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateOrConnectWithoutGradeReportProblemLinesInput> =
  z
    .object({
      where: z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            GradeReportLineCreateWithoutGradeReportProblemLinesInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportLineCreateOrConnectWithoutGradeReportProblemLinesInputObjectSchema =
  Schema;
