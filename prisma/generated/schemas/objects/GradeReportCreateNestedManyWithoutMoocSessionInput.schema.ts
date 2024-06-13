import { z } from 'zod';
import { GradeReportCreateWithoutMoocSessionInputObjectSchema } from './GradeReportCreateWithoutMoocSessionInput.schema';
import { GradeReportUncheckedCreateWithoutMoocSessionInputObjectSchema } from './GradeReportUncheckedCreateWithoutMoocSessionInput.schema';
import { GradeReportCreateOrConnectWithoutMoocSessionInputObjectSchema } from './GradeReportCreateOrConnectWithoutMoocSessionInput.schema';
import { GradeReportCreateManyMoocSessionInputEnvelopeObjectSchema } from './GradeReportCreateManyMoocSessionInputEnvelope.schema';
import { GradeReportWhereUniqueInputObjectSchema } from './GradeReportWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportCreateNestedManyWithoutMoocSessionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GradeReportCreateWithoutMoocSessionInputObjectSchema),
          z
            .lazy(() => GradeReportCreateWithoutMoocSessionInputObjectSchema)
            .array(),
          z.lazy(
            () => GradeReportUncheckedCreateWithoutMoocSessionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportUncheckedCreateWithoutMoocSessionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => GradeReportCreateOrConnectWithoutMoocSessionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                GradeReportCreateOrConnectWithoutMoocSessionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => GradeReportCreateManyMoocSessionInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => GradeReportWhereUniqueInputObjectSchema),
          z.lazy(() => GradeReportWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const GradeReportCreateNestedManyWithoutMoocSessionInputObjectSchema =
  Schema;
