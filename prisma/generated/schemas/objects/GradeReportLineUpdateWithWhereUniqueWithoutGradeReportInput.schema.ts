import { z } from 'zod';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineUpdateWithoutGradeReportInputObjectSchema } from './GradeReportLineUpdateWithoutGradeReportInput.schema';
import { GradeReportLineUncheckedUpdateWithoutGradeReportInputObjectSchema } from './GradeReportLineUncheckedUpdateWithoutGradeReportInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpdateWithWhereUniqueWithoutGradeReportInput> =
  z
    .object({
      where: z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => GradeReportLineUpdateWithoutGradeReportInputObjectSchema),
        z.lazy(
          () =>
            GradeReportLineUncheckedUpdateWithoutGradeReportInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportLineUpdateWithWhereUniqueWithoutGradeReportInputObjectSchema =
  Schema;
