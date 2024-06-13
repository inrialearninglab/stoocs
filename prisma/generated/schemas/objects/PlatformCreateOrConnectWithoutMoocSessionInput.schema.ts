import { z } from 'zod';
import { PlatformWhereUniqueInputObjectSchema } from './PlatformWhereUniqueInput.schema';
import { PlatformCreateWithoutMoocSessionInputObjectSchema } from './PlatformCreateWithoutMoocSessionInput.schema';
import { PlatformUncheckedCreateWithoutMoocSessionInputObjectSchema } from './PlatformUncheckedCreateWithoutMoocSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PlatformCreateOrConnectWithoutMoocSessionInput> =
  z
    .object({
      where: z.lazy(() => PlatformWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PlatformCreateWithoutMoocSessionInputObjectSchema),
        z.lazy(
          () => PlatformUncheckedCreateWithoutMoocSessionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PlatformCreateOrConnectWithoutMoocSessionInputObjectSchema =
  Schema;
