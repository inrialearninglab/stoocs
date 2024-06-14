import { z } from 'zod';
import { GradeReportProblemWhereUniqueInputObjectSchema } from './GradeReportProblemWhereUniqueInput.schema';
import { GradeReportProblemUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUpdateWithoutGradeReportLineInput.schema';
import { GradeReportProblemUncheckedUpdateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUncheckedUpdateWithoutGradeReportLineInput.schema';
import { GradeReportProblemCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemCreateWithoutGradeReportLineInput.schema';
import { GradeReportProblemUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUncheckedCreateWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemUpsertWithWhereUniqueWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => GradeReportProblemUpdateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportProblemUncheckedUpdateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => GradeReportProblemCreateWithoutGradeReportLineInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportProblemUncheckedCreateWithoutGradeReportLineInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportProblemUpsertWithWhereUniqueWithoutGradeReportLineInputObjectSchema =
  Schema;
