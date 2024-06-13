import { z } from 'zod';
import { GradeReportWhereUniqueInputObjectSchema } from './GradeReportWhereUniqueInput.schema';
import { GradeReportCreateWithoutGradeReportLinesInputObjectSchema } from './GradeReportCreateWithoutGradeReportLinesInput.schema';
import { GradeReportUncheckedCreateWithoutGradeReportLinesInputObjectSchema } from './GradeReportUncheckedCreateWithoutGradeReportLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportCreateOrConnectWithoutGradeReportLinesInput> =
  z
    .object({
      where: z.lazy(() => GradeReportWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => GradeReportCreateWithoutGradeReportLinesInputObjectSchema),
        z.lazy(
          () =>
            GradeReportUncheckedCreateWithoutGradeReportLinesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportCreateOrConnectWithoutGradeReportLinesInputObjectSchema =
  Schema;
