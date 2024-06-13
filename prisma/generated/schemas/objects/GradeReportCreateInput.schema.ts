import { z } from 'zod';
import { GradeReportLineCreateNestedManyWithoutGradeReportInputObjectSchema } from './GradeReportLineCreateNestedManyWithoutGradeReportInput.schema';
import { MoocSessionCreateNestedOneWithoutGradeReportsInputObjectSchema } from './MoocSessionCreateNestedOneWithoutGradeReportsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportCreateInput> = z
  .object({
    id: z.string().optional(),
    date: z.coerce.date().optional(),
    gradeReportLines: z
      .lazy(
        () =>
          GradeReportLineCreateNestedManyWithoutGradeReportInputObjectSchema,
      )
      .optional(),
    MoocSession: z.lazy(
      () => MoocSessionCreateNestedOneWithoutGradeReportsInputObjectSchema,
    ),
  })
  .strict();

export const GradeReportCreateInputObjectSchema = Schema;
