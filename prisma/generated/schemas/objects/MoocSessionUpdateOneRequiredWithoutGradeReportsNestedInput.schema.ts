import { z } from 'zod';
import { MoocSessionCreateWithoutGradeReportsInputObjectSchema } from './MoocSessionCreateWithoutGradeReportsInput.schema';
import { MoocSessionUncheckedCreateWithoutGradeReportsInputObjectSchema } from './MoocSessionUncheckedCreateWithoutGradeReportsInput.schema';
import { MoocSessionCreateOrConnectWithoutGradeReportsInputObjectSchema } from './MoocSessionCreateOrConnectWithoutGradeReportsInput.schema';
import { MoocSessionUpsertWithoutGradeReportsInputObjectSchema } from './MoocSessionUpsertWithoutGradeReportsInput.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithoutGradeReportsInputObjectSchema } from './MoocSessionUpdateWithoutGradeReportsInput.schema';
import { MoocSessionUncheckedUpdateWithoutGradeReportsInputObjectSchema } from './MoocSessionUncheckedUpdateWithoutGradeReportsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpdateOneRequiredWithoutGradeReportsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoocSessionCreateWithoutGradeReportsInputObjectSchema),
          z.lazy(
            () =>
              MoocSessionUncheckedCreateWithoutGradeReportsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => MoocSessionCreateOrConnectWithoutGradeReportsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => MoocSessionUpsertWithoutGradeReportsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MoocSessionUpdateWithoutGradeReportsInputObjectSchema),
          z.lazy(
            () =>
              MoocSessionUncheckedUpdateWithoutGradeReportsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MoocSessionUpdateOneRequiredWithoutGradeReportsNestedInputObjectSchema =
  Schema;
