import { z } from 'zod';
import { GradeReportScalarWhereInputObjectSchema } from './GradeReportScalarWhereInput.schema';
import { GradeReportUpdateManyMutationInputObjectSchema } from './GradeReportUpdateManyMutationInput.schema';
import { GradeReportUncheckedUpdateManyWithoutGradeReportsInputObjectSchema } from './GradeReportUncheckedUpdateManyWithoutGradeReportsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportUpdateManyWithWhereWithoutMoocSessionInput> =
  z
    .object({
      where: z.lazy(() => GradeReportScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => GradeReportUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            GradeReportUncheckedUpdateManyWithoutGradeReportsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportUpdateManyWithWhereWithoutMoocSessionInputObjectSchema =
  Schema;
