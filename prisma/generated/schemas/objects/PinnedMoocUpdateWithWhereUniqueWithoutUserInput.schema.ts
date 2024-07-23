import { z } from 'zod';
import { PinnedMoocWhereUniqueInputObjectSchema } from './PinnedMoocWhereUniqueInput.schema';
import { PinnedMoocUpdateWithoutUserInputObjectSchema } from './PinnedMoocUpdateWithoutUserInput.schema';
import { PinnedMoocUncheckedUpdateWithoutUserInputObjectSchema } from './PinnedMoocUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PinnedMoocUpdateWithoutUserInputObjectSchema),
        z.lazy(() => PinnedMoocUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const PinnedMoocUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
