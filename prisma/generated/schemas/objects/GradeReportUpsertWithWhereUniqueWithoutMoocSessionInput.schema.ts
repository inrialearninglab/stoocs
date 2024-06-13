import { z } from 'zod';
import { GradeReportWhereUniqueInputObjectSchema } from './GradeReportWhereUniqueInput.schema';
import { GradeReportUpdateWithoutMoocSessionInputObjectSchema } from './GradeReportUpdateWithoutMoocSessionInput.schema';
import { GradeReportUncheckedUpdateWithoutMoocSessionInputObjectSchema } from './GradeReportUncheckedUpdateWithoutMoocSessionInput.schema';
import { GradeReportCreateWithoutMoocSessionInputObjectSchema } from './GradeReportCreateWithoutMoocSessionInput.schema';
import { GradeReportUncheckedCreateWithoutMoocSessionInputObjectSchema } from './GradeReportUncheckedCreateWithoutMoocSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportUpsertWithWhereUniqueWithoutMoocSessionInput> =
  z
    .object({
      where: z.lazy(() => GradeReportWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => GradeReportUpdateWithoutMoocSessionInputObjectSchema),
        z.lazy(
          () => GradeReportUncheckedUpdateWithoutMoocSessionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => GradeReportCreateWithoutMoocSessionInputObjectSchema),
        z.lazy(
          () => GradeReportUncheckedCreateWithoutMoocSessionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportUpsertWithWhereUniqueWithoutMoocSessionInputObjectSchema =
  Schema;
