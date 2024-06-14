import { z } from 'zod';
import { GradeReportProblemWhereUniqueInputObjectSchema } from './GradeReportProblemWhereUniqueInput.schema';
import { GradeReportProblemCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemCreateWithoutGradeReportLineInput.schema';
import { GradeReportProblemUncheckedCreateWithoutGradeReportLineInputObjectSchema } from './GradeReportProblemUncheckedCreateWithoutGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemCreateOrConnectWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportProblemWhereUniqueInputObjectSchema),
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

export const GradeReportProblemCreateOrConnectWithoutGradeReportLineInputObjectSchema =
  Schema;
