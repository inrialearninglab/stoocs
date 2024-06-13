import { z } from 'zod';
import { GradeReportProblemLineWhereUniqueInputObjectSchema } from './GradeReportProblemLineWhereUniqueInput.schema';
import { GradeReportProblemLineUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUpdateWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineUncheckedUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUncheckedUpdateWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineUpdateWithWhereUniqueWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            GradeReportProblemLineUpdateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportProblemLineUncheckedUpdateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportProblemLineUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema =
  Schema;
