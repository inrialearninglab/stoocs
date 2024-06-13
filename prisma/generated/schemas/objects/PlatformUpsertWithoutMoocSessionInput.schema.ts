import { z } from 'zod';
import { PlatformUpdateWithoutMoocSessionInputObjectSchema } from './PlatformUpdateWithoutMoocSessionInput.schema';
import { PlatformUncheckedUpdateWithoutMoocSessionInputObjectSchema } from './PlatformUncheckedUpdateWithoutMoocSessionInput.schema';
import { PlatformCreateWithoutMoocSessionInputObjectSchema } from './PlatformCreateWithoutMoocSessionInput.schema';
import { PlatformUncheckedCreateWithoutMoocSessionInputObjectSchema } from './PlatformUncheckedCreateWithoutMoocSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PlatformUpsertWithoutMoocSessionInput> = z
  .object({
    update: z.union([
      z.lazy(() => PlatformUpdateWithoutMoocSessionInputObjectSchema),
      z.lazy(() => PlatformUncheckedUpdateWithoutMoocSessionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PlatformCreateWithoutMoocSessionInputObjectSchema),
      z.lazy(() => PlatformUncheckedCreateWithoutMoocSessionInputObjectSchema),
    ]),
  })
  .strict();

export const PlatformUpsertWithoutMoocSessionInputObjectSchema = Schema;
