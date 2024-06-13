import { z } from 'zod';
import { GradeReportUpdateWithoutGradeReportLinesInputObjectSchema } from './GradeReportUpdateWithoutGradeReportLinesInput.schema';
import { GradeReportUncheckedUpdateWithoutGradeReportLinesInputObjectSchema } from './GradeReportUncheckedUpdateWithoutGradeReportLinesInput.schema';
import { GradeReportCreateWithoutGradeReportLinesInputObjectSchema } from './GradeReportCreateWithoutGradeReportLinesInput.schema';
import { GradeReportUncheckedCreateWithoutGradeReportLinesInputObjectSchema } from './GradeReportUncheckedCreateWithoutGradeReportLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportUpsertWithoutGradeReportLinesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => GradeReportUpdateWithoutGradeReportLinesInputObjectSchema),
        z.lazy(
          () =>
            GradeReportUncheckedUpdateWithoutGradeReportLinesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => GradeReportCreateWithoutGradeReportLinesInputObjectSchema),
        z.lazy(
          () =>
            GradeReportUncheckedCreateWithoutGradeReportLinesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportUpsertWithoutGradeReportLinesInputObjectSchema = Schema;
