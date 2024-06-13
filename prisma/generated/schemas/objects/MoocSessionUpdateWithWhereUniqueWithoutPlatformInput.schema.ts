import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithoutPlatformInputObjectSchema } from './MoocSessionUpdateWithoutPlatformInput.schema';
import { MoocSessionUncheckedUpdateWithoutPlatformInputObjectSchema } from './MoocSessionUncheckedUpdateWithoutPlatformInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpdateWithWhereUniqueWithoutPlatformInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MoocSessionUpdateWithoutPlatformInputObjectSchema),
        z.lazy(
          () => MoocSessionUncheckedUpdateWithoutPlatformInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MoocSessionUpdateWithWhereUniqueWithoutPlatformInputObjectSchema =
  Schema;
