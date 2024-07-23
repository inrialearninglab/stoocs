import { z } from 'zod';
import { PinnedMoocWhereUniqueInputObjectSchema } from './PinnedMoocWhereUniqueInput.schema';
import { PinnedMoocUpdateWithoutMoocInputObjectSchema } from './PinnedMoocUpdateWithoutMoocInput.schema';
import { PinnedMoocUncheckedUpdateWithoutMoocInputObjectSchema } from './PinnedMoocUncheckedUpdateWithoutMoocInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUpdateWithWhereUniqueWithoutMoocInput> =
  z
    .object({
      where: z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PinnedMoocUpdateWithoutMoocInputObjectSchema),
        z.lazy(() => PinnedMoocUncheckedUpdateWithoutMoocInputObjectSchema),
      ]),
    })
    .strict();

export const PinnedMoocUpdateWithWhereUniqueWithoutMoocInputObjectSchema =
  Schema;
