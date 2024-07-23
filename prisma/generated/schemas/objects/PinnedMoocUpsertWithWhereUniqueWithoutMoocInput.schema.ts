import { z } from 'zod';
import { PinnedMoocWhereUniqueInputObjectSchema } from './PinnedMoocWhereUniqueInput.schema';
import { PinnedMoocUpdateWithoutMoocInputObjectSchema } from './PinnedMoocUpdateWithoutMoocInput.schema';
import { PinnedMoocUncheckedUpdateWithoutMoocInputObjectSchema } from './PinnedMoocUncheckedUpdateWithoutMoocInput.schema';
import { PinnedMoocCreateWithoutMoocInputObjectSchema } from './PinnedMoocCreateWithoutMoocInput.schema';
import { PinnedMoocUncheckedCreateWithoutMoocInputObjectSchema } from './PinnedMoocUncheckedCreateWithoutMoocInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUpsertWithWhereUniqueWithoutMoocInput> =
  z
    .object({
      where: z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PinnedMoocUpdateWithoutMoocInputObjectSchema),
        z.lazy(() => PinnedMoocUncheckedUpdateWithoutMoocInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PinnedMoocCreateWithoutMoocInputObjectSchema),
        z.lazy(() => PinnedMoocUncheckedCreateWithoutMoocInputObjectSchema),
      ]),
    })
    .strict();

export const PinnedMoocUpsertWithWhereUniqueWithoutMoocInputObjectSchema =
  Schema;
