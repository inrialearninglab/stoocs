import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionCreateWithoutPlatformInputObjectSchema } from './MoocSessionCreateWithoutPlatformInput.schema';
import { MoocSessionUncheckedCreateWithoutPlatformInputObjectSchema } from './MoocSessionUncheckedCreateWithoutPlatformInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionCreateOrConnectWithoutPlatformInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MoocSessionCreateWithoutPlatformInputObjectSchema),
        z.lazy(
          () => MoocSessionUncheckedCreateWithoutPlatformInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MoocSessionCreateOrConnectWithoutPlatformInputObjectSchema =
  Schema;
