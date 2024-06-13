import { z } from 'zod';
import { PlatformCreateWithoutMoocSessionInputObjectSchema } from './PlatformCreateWithoutMoocSessionInput.schema';
import { PlatformUncheckedCreateWithoutMoocSessionInputObjectSchema } from './PlatformUncheckedCreateWithoutMoocSessionInput.schema';
import { PlatformCreateOrConnectWithoutMoocSessionInputObjectSchema } from './PlatformCreateOrConnectWithoutMoocSessionInput.schema';
import { PlatformWhereUniqueInputObjectSchema } from './PlatformWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PlatformCreateNestedOneWithoutMoocSessionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PlatformCreateWithoutMoocSessionInputObjectSchema),
          z.lazy(
            () => PlatformUncheckedCreateWithoutMoocSessionInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PlatformCreateOrConnectWithoutMoocSessionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PlatformWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const PlatformCreateNestedOneWithoutMoocSessionInputObjectSchema =
  Schema;
