import { z } from 'zod';
import { GradeReportCreateWithoutGradeReportLinesInputObjectSchema } from './GradeReportCreateWithoutGradeReportLinesInput.schema';
import { GradeReportUncheckedCreateWithoutGradeReportLinesInputObjectSchema } from './GradeReportUncheckedCreateWithoutGradeReportLinesInput.schema';
import { GradeReportCreateOrConnectWithoutGradeReportLinesInputObjectSchema } from './GradeReportCreateOrConnectWithoutGradeReportLinesInput.schema';
import { GradeReportUpsertWithoutGradeReportLinesInputObjectSchema } from './GradeReportUpsertWithoutGradeReportLinesInput.schema';
import { GradeReportWhereUniqueInputObjectSchema } from './GradeReportWhereUniqueInput.schema';
import { GradeReportUpdateWithoutGradeReportLinesInputObjectSchema } from './GradeReportUpdateWithoutGradeReportLinesInput.schema';
import { GradeReportUncheckedUpdateWithoutGradeReportLinesInputObjectSchema } from './GradeReportUncheckedUpdateWithoutGradeReportLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportUpdateOneRequiredWithoutGradeReportLinesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => GradeReportCreateWithoutGradeReportLinesInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportUncheckedCreateWithoutGradeReportLinesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            GradeReportCreateOrConnectWithoutGradeReportLinesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => GradeReportUpsertWithoutGradeReportLinesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => GradeReportWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => GradeReportUpdateWithoutGradeReportLinesInputObjectSchema,
          ),
          z.lazy(
            () =>
              GradeReportUncheckedUpdateWithoutGradeReportLinesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const GradeReportUpdateOneRequiredWithoutGradeReportLinesNestedInputObjectSchema =
  Schema;
