import { z } from 'zod';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineCreateWithoutGradeReportInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateOrConnectWithoutGradeReportInput> =
  z
    .object({
      where: z.lazy(() => GradeReportLineWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => GradeReportLineCreateWithoutGradeReportInputObjectSchema),
        z.lazy(
          () =>
            GradeReportLineUncheckedCreateWithoutGradeReportInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportLineCreateOrConnectWithoutGradeReportInputObjectSchema =
  Schema;
