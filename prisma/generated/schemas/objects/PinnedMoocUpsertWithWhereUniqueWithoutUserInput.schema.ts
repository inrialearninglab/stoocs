import { z } from 'zod';
import { PinnedMoocWhereUniqueInputObjectSchema } from './PinnedMoocWhereUniqueInput.schema';
import { PinnedMoocUpdateWithoutUserInputObjectSchema } from './PinnedMoocUpdateWithoutUserInput.schema';
import { PinnedMoocUncheckedUpdateWithoutUserInputObjectSchema } from './PinnedMoocUncheckedUpdateWithoutUserInput.schema';
import { PinnedMoocCreateWithoutUserInputObjectSchema } from './PinnedMoocCreateWithoutUserInput.schema';
import { PinnedMoocUncheckedCreateWithoutUserInputObjectSchema } from './PinnedMoocUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PinnedMoocUpdateWithoutUserInputObjectSchema),
        z.lazy(() => PinnedMoocUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PinnedMoocCreateWithoutUserInputObjectSchema),
        z.lazy(() => PinnedMoocUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const PinnedMoocUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
