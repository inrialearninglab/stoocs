import { z } from 'zod';
import { GradeReportWhereUniqueInputObjectSchema } from './GradeReportWhereUniqueInput.schema';
import { GradeReportCreateWithoutMoocSessionInputObjectSchema } from './GradeReportCreateWithoutMoocSessionInput.schema';
import { GradeReportUncheckedCreateWithoutMoocSessionInputObjectSchema } from './GradeReportUncheckedCreateWithoutMoocSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportCreateOrConnectWithoutMoocSessionInput> =
  z
    .object({
      where: z.lazy(() => GradeReportWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => GradeReportCreateWithoutMoocSessionInputObjectSchema),
        z.lazy(
          () => GradeReportUncheckedCreateWithoutMoocSessionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportCreateOrConnectWithoutMoocSessionInputObjectSchema =
  Schema;
