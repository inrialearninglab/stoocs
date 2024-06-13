import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionCreateWithoutGradeReportsInputObjectSchema } from './MoocSessionCreateWithoutGradeReportsInput.schema';
import { MoocSessionUncheckedCreateWithoutGradeReportsInputObjectSchema } from './MoocSessionUncheckedCreateWithoutGradeReportsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionCreateOrConnectWithoutGradeReportsInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MoocSessionCreateWithoutGradeReportsInputObjectSchema),
        z.lazy(
          () => MoocSessionUncheckedCreateWithoutGradeReportsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MoocSessionCreateOrConnectWithoutGradeReportsInputObjectSchema =
  Schema;
