import { z } from 'zod';
import { GradeReportProblemWhereUniqueInputObjectSchema } from './GradeReportProblemWhereUniqueInput.schema';
import { GradeReportProblemUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUpdateWithoutGradeReportLineInput.schema';
import { GradeReportProblemUncheckedUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUncheckedUpdateWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemUpdateWithWhereUniqueWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => GradeReportProblemUpdateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportProblemUncheckedUpdateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportProblemUpdateWithWhereUniqueWithoutGradeReportLineInputObjectSchema =
  Schema;
