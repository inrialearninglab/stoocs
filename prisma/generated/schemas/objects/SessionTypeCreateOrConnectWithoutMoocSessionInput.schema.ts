import { z } from 'zod';
import { SessionTypeWhereUniqueInputObjectSchema } from './SessionTypeWhereUniqueInput.schema';
import { SessionTypeCreateWithoutMoocSessionInputObjectSchema } from './SessionTypeCreateWithoutMoocSessionInput.schema';
import { SessionTypeUncheckedCreateWithoutMoocSessionInputObjectSchema } from './SessionTypeUncheckedCreateWithoutMoocSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeCreateOrConnectWithoutMoocSessionInput> =
  z
    .object({
      where: z.lazy(() => SessionTypeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SessionTypeCreateWithoutMoocSessionInputObjectSchema),
        z.lazy(
          () => SessionTypeUncheckedCreateWithoutMoocSessionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SessionTypeCreateOrConnectWithoutMoocSessionInputObjectSchema =
  Schema;
