import { z } from 'zod';
import { SessionTypeCreateWithoutMoocSessionInputObjectSchema } from './SessionTypeCreateWithoutMoocSessionInput.schema';
import { SessionTypeUncheckedCreateWithoutMoocSessionInputObjectSchema } from './SessionTypeUncheckedCreateWithoutMoocSessionInput.schema';
import { SessionTypeCreateOrConnectWithoutMoocSessionInputObjectSchema } from './SessionTypeCreateOrConnectWithoutMoocSessionInput.schema';
import { SessionTypeWhereUniqueInputObjectSchema } from './SessionTypeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeCreateNestedOneWithoutMoocSessionInput> =
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
      connect: z.lazy(() => SessionTypeWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const SessionTypeCreateNestedOneWithoutMoocSessionInputObjectSchema =
  Schema;
