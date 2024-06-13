import { z } from 'zod';
import { SessionTypeCreateWithoutMoocSessionInputObjectSchema } from './SessionTypeCreateWithoutMoocSessionInput.schema';
import { SessionTypeUncheckedCreateWithoutMoocSessionInputObjectSchema } from './SessionTypeUncheckedCreateWithoutMoocSessionInput.schema';
import { SessionTypeCreateOrConnectWithoutMoocSessionInputObjectSchema } from './SessionTypeCreateOrConnectWithoutMoocSessionInput.schema';
import { SessionTypeUpsertWithoutMoocSessionInputObjectSchema } from './SessionTypeUpsertWithoutMoocSessionInput.schema';
import { SessionTypeWhereUniqueInputObjectSchema } from './SessionTypeWhereUniqueInput.schema';
import { SessionTypeUpdateWithoutMoocSessionInputObjectSchema } from './SessionTypeUpdateWithoutMoocSessionInput.schema';
import { SessionTypeUncheckedUpdateWithoutMoocSessionInputObjectSchema } from './SessionTypeUncheckedUpdateWithoutMoocSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeUpdateOneWithoutMoocSessionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionTypeCreateWithoutMoocSessionInputObjectSchema),
          z.lazy(
            () => SessionTypeUncheckedCreateWithoutMoocSessionInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => SessionTypeCreateOrConnectWithoutMoocSessionInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => SessionTypeUpsertWithoutMoocSessionInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => SessionTypeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SessionTypeUpdateWithoutMoocSessionInputObjectSchema),
          z.lazy(
            () => SessionTypeUncheckedUpdateWithoutMoocSessionInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SessionTypeUpdateOneWithoutMoocSessionNestedInputObjectSchema =
  Schema;
