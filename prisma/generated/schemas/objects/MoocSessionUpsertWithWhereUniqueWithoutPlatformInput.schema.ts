import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithoutPlatformInputObjectSchema } from './MoocSessionUpdateWithoutPlatformInput.schema';
import { MoocSessionUncheckedUpdateWithoutPlatformInputObjectSchema } from './MoocSessionUncheckedUpdateWithoutPlatformInput.schema';
import { MoocSessionCreateWithoutPlatformInputObjectSchema } from './MoocSessionCreateWithoutPlatformInput.schema';
import { MoocSessionUncheckedCreateWithoutPlatformInputObjectSchema } from './MoocSessionUncheckedCreateWithoutPlatformInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpsertWithWhereUniqueWithoutPlatformInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MoocSessionUpdateWithoutPlatformInputObjectSchema),
        z.lazy(
          () => MoocSessionUncheckedUpdateWithoutPlatformInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MoocSessionCreateWithoutPlatformInputObjectSchema),
        z.lazy(
          () => MoocSessionUncheckedCreateWithoutPlatformInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MoocSessionUpsertWithWhereUniqueWithoutPlatformInputObjectSchema =
  Schema;
