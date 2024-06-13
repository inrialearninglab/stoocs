import { z } from 'zod';
import { GradeReportLineScalarWhereInputObjectSchema } from './GradeReportLineScalarWhereInput.schema';
import { GradeReportLineUpdateManyMutationInputObjectSchema } from './GradeReportLineUpdateManyMutationInput.schema';
import { GradeReportLineUncheckedUpdateManyWithoutGradeReportLinesInputObjectSchema } from './GradeReportLineUncheckedUpdateManyWithoutGradeReportLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUpdateManyWithWhereWithoutGradeReportInput> =
  z
    .object({
      where: z.lazy(() => GradeReportLineScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => GradeReportLineUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            GradeReportLineUncheckedUpdateManyWithoutGradeReportLinesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportLineUpdateManyWithWhereWithoutGradeReportInputObjectSchema =
  Schema;
