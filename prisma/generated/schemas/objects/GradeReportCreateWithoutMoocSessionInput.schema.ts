import { z } from 'zod';
import { GradeReportLineCreateNestedManyWithoutGradeReportInputObjectSchema } from './GradeReportLineCreateNestedManyWithoutGradeReportInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportCreateWithoutMoocSessionInput> = z
  .object({
    id: z.string().optional(),
    date: z.coerce.date().optional(),
    gradeReportLines: z
      .lazy(
        () =>
          GradeReportLineCreateNestedManyWithoutGradeReportInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportCreateWithoutMoocSessionInputObjectSchema = Schema;
