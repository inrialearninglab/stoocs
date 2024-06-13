import { z } from 'zod';
import { SessionTypeUpdateWithoutMoocSessionInputObjectSchema } from './SessionTypeUpdateWithoutMoocSessionInput.schema';
import { SessionTypeUncheckedUpdateWithoutMoocSessionInputObjectSchema } from './SessionTypeUncheckedUpdateWithoutMoocSessionInput.schema';
import { SessionTypeCreateWithoutMoocSessionInputObjectSchema } from './SessionTypeCreateWithoutMoocSessionInput.schema';
import { SessionTypeUncheckedCreateWithoutMoocSessionInputObjectSchema } from './SessionTypeUncheckedCreateWithoutMoocSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeUpsertWithoutMoocSessionInput> = z
  .object({
    update: z.union([
      z.lazy(() => SessionTypeUpdateWithoutMoocSessionInputObjectSchema),
      z.lazy(
        () => SessionTypeUncheckedUpdateWithoutMoocSessionInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => SessionTypeCreateWithoutMoocSessionInputObjectSchema),
      z.lazy(
        () => SessionTypeUncheckedCreateWithoutMoocSessionInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const SessionTypeUpsertWithoutMoocSessionInputObjectSchema = Schema;
