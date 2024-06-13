import { z } from 'zod';
import { PlatformCreateWithoutMoocSessionInputObjectSchema } from './PlatformCreateWithoutMoocSessionInput.schema';
import { PlatformUncheckedCreateWithoutMoocSessionInputObjectSchema } from './PlatformUncheckedCreateWithoutMoocSessionInput.schema';
import { PlatformCreateOrConnectWithoutMoocSessionInputObjectSchema } from './PlatformCreateOrConnectWithoutMoocSessionInput.schema';
import { PlatformUpsertWithoutMoocSessionInputObjectSchema } from './PlatformUpsertWithoutMoocSessionInput.schema';
import { PlatformWhereUniqueInputObjectSchema } from './PlatformWhereUniqueInput.schema';
import { PlatformUpdateWithoutMoocSessionInputObjectSchema } from './PlatformUpdateWithoutMoocSessionInput.schema';
import { PlatformUncheckedUpdateWithoutMoocSessionInputObjectSchema } from './PlatformUncheckedUpdateWithoutMoocSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PlatformUpdateOneRequiredWithoutMoocSessionNestedInput> =
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
      upsert: z
        .lazy(() => PlatformUpsertWithoutMoocSessionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PlatformWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PlatformUpdateWithoutMoocSessionInputObjectSchema),
          z.lazy(
            () => PlatformUncheckedUpdateWithoutMoocSessionInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PlatformUpdateOneRequiredWithoutMoocSessionNestedInputObjectSchema =
  Schema;
