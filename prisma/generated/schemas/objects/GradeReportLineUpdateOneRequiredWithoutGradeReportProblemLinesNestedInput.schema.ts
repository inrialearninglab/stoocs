import { z } from 'zod';
import { GradeReportLineCreateWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineCreateWithoutGradeReportProblemLinesInput.schema';
import { GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInput.schema';
import { GradeReportLineCreateOrConnectWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineCreateOrConnectWithoutGradeReportProblemLinesInput.schema';
import { GradeReportLineUpsertWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineUpsertWithoutGradeReportProblemLinesInput.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineUpdateWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineUpdateWithoutGradeReportProblemLinesInput.schema';
import { GradeReportLineUncheckedUpdateWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportLineUncheckedUpdateWithoutGradeReportProblemLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpdateOneRequiredWithoutGradeReportProblemLinesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              GradeReportLineCreateWithoutGradeReportProblemLinesInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportLineUncheckedCreateWithoutGradeReportProblemLinesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            GradeReportLineCreateOrConnectWithoutGradeReportProblemLinesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            GradeReportLineUpsertWithoutGradeReportProblemLinesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => GradeReportLineWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              GradeReportLineUpdateWithoutGradeReportProblemLinesInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportLineUncheckedUpdateWithoutGradeReportProblemLinesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const GradeReportLineUpdateOneRequiredWithoutGradeReportProblemLinesNestedInputObjectSchema =
  Schema;
