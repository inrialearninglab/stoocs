import { z } from 'zod';
import { MoocSessionCreateWithoutGradeReportsInputObjectSchema } from './MoocSessionCreateWithoutGradeReportsInput.schema';
import { MoocSessionUncheckedCreateWithoutGradeReportsInputObjectSchema } from './MoocSessionUncheckedCreateWithoutGradeReportsInput.schema';
import { MoocSessionCreateOrConnectWithoutGradeReportsInputObjectSchema } from './MoocSessionCreateOrConnectWithoutGradeReportsInput.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionCreateNestedOneWithoutGradeReportsInput> =
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
      connect: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const MoocSessionCreateNestedOneWithoutGradeReportsInputObjectSchema =
  Schema;
