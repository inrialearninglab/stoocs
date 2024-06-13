import { z } from 'zod';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineUpdateWithoutGradeReportInputObjectSchema } from './GradeReportLineUpdateWithoutGradeReportInput.schema';
import { GradeReportLineUncheckedUpdateWithoutGradeReportInputObjectSchema } from './GradeReportLineUncheckedUpdateWithoutGradeReportInput.schema';
import { GradeReportLineCreateWithoutGradeReportInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpsertWithWhereUniqueWithoutGradeReportInput> =
  z
    .object({
      where: z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => GradeReportLineUpdateWithoutGradeReportInputObjectSchema),
        z.lazy(
          () =>
            GradeReportLineUncheckedUpdateWithoutGradeReportInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => GradeReportLineCreateWithoutGradeReportInputObjectSchema),
        z.lazy(
          () =>
            GradeReportLineUncheckedCreateWithoutGradeReportInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportLineUpsertWithWhereUniqueWithoutGradeReportInputObjectSchema =
  Schema;
