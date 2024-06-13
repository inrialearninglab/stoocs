import { z } from 'zod';
import { GradeReportProblemLineWhereUniqueInputObjectSchema } from './GradeReportProblemLineWhereUniqueInput.schema';
import { GradeReportProblemLineCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineCreateWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUncheckedCreateWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineCreateOrConnectWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            GradeReportProblemLineCreateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportProblemLineUncheckedCreateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportProblemLineCreateOrConnectWithoutGradeReportLineInputObjectSchema =
  Schema;
