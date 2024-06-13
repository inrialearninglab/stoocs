import { z } from 'zod';
import { MoocSessionCreateNestedOneWithoutGradeReportsInputObjectSchema } from './MoocSessionCreateNestedOneWithoutGradeReportsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportCreateWithoutGradeReportLinesInput> =
  z
    .object({
      id: z.string().optional(),
      date: z.coerce.date().optional(),
      MoocSession: z.lazy(
        () => MoocSessionCreateNestedOneWithoutGradeReportsInputObjectSchema,
      ),
    })
    .strict();

export const GradeReportCreateWithoutGradeReportLinesInputObjectSchema = Schema;
