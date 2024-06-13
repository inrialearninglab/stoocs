import { z } from 'zod';
import { GradeReportCreateWithoutGradeReportLinesInputObjectSchema } from './GradeReportCreateWithoutGradeReportLinesInput.schema';
import { GradeReportUncheckedCreateWithoutGradeReportLinesInputObjectSchema } from './GradeReportUncheckedCreateWithoutGradeReportLinesInput.schema';
import { GradeReportCreateOrConnectWithoutGradeReportLinesInputObjectSchema } from './GradeReportCreateOrConnectWithoutGradeReportLinesInput.schema';
import { GradeReportWhereUniqueInputObjectSchema } from './GradeReportWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportCreateNestedOneWithoutGradeReportLinesInput> =
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
      connect: z.lazy(() => GradeReportWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const GradeReportCreateNestedOneWithoutGradeReportLinesInputObjectSchema =
  Schema;
