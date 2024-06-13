import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionCreateWithoutAuthorsInputObjectSchema } from './MoocSessionCreateWithoutAuthorsInput.schema';
import { MoocSessionUncheckedCreateWithoutAuthorsInputObjectSchema } from './MoocSessionUncheckedCreateWithoutAuthorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionCreateOrConnectWithoutAuthorsInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MoocSessionCreateWithoutAuthorsInputObjectSchema),
        z.lazy(() => MoocSessionUncheckedCreateWithoutAuthorsInputObjectSchema),
      ]),
    })
    .strict();

export const MoocSessionCreateOrConnectWithoutAuthorsInputObjectSchema = Schema;
