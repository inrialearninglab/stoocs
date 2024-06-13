import { z } from 'zod';
import { GradeReportLineUncheckedCreateNestedManyWithoutGradeReportInputObjectSchema } from './GradeReportLineUncheckedCreateNestedManyWithoutGradeReportInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportUncheckedCreateWithoutMoocSessionInput> =
  z
    .object({
      id: z.string().optional(),
      date: z.coerce.date().optional(),
      gradeReportLines: z
        .lazy(
          () =>
            GradeReportLineUncheckedCreateNestedManyWithoutGradeReportInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const GradeReportUncheckedCreateWithoutMoocSessionInputObjectSchema =
  Schema;
