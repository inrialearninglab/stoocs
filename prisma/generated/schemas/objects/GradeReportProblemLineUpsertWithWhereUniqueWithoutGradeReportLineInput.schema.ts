import { z } from 'zod';
import { GradeReportProblemLineWhereUniqueInputObjectSchema } from './GradeReportProblemLineWhereUniqueInput.schema';
import { GradeReportProblemLineUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUpdateWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineUncheckedUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUncheckedUpdateWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineCreateWithoutGradeReportLineInput.schema';
import { GradeReportProblemLineUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemLineUncheckedCreateWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineUpsertWithWhereUniqueWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportProblemLineWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            GradeReportProblemLineUpdateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportProblemLineUncheckedUpdateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
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

export const GradeReportProblemLineUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema =
  Schema;
