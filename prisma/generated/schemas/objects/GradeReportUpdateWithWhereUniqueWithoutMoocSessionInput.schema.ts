import { z } from 'zod';
import { GradeReportWhereUniqueInputObjectSchema } from './GradeReportWhereUniqueInput.schema';
import { GradeReportUpdateWithoutMoocSessionInputObjectSchema } from './GradeReportUpdateWithoutMoocSessionInput.schema';
import { GradeReportUncheckedUpdateWithoutMoocSessionInputObjectSchema } from './GradeReportUncheckedUpdateWithoutMoocSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportUpdateWithWhereUniqueWithoutMoocSessionInput> =
  z
    .object({
      where: z.lazy(() => GradeReportWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => GradeReportUpdateWithoutMoocSessionInputObjectSchema),
        z.lazy(
          () => GradeReportUncheckedUpdateWithoutMoocSessionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportUpdateWithWhereUniqueWithoutMoocSessionInputObjectSchema =
  Schema;
