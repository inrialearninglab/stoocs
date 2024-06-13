import { z } from 'zod';
import { GradeReportLineUncheckedCreateNestedManyWithoutGradeReportInputObjectSchema } from './GradeReportLineUncheckedCreateNestedManyWithoutGradeReportInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    date: z.coerce.date().optional(),
    moocSessionId: z.string(),
    gradeReportLines: z
      .lazy(
        () =>
          GradeReportLineUncheckedCreateNestedManyWithoutGradeReportInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportUncheckedCreateInputObjectSchema = Schema;
