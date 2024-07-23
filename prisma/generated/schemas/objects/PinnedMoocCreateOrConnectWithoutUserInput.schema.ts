import { z } from 'zod';
import { PinnedMoocWhereUniqueInputObjectSchema } from './PinnedMoocWhereUniqueInput.schema';
import { PinnedMoocCreateWithoutUserInputObjectSchema } from './PinnedMoocCreateWithoutUserInput.schema';
import { PinnedMoocUncheckedCreateWithoutUserInputObjectSchema } from './PinnedMoocUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PinnedMoocCreateWithoutUserInputObjectSchema),
      z.lazy(() => PinnedMoocUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PinnedMoocCreateOrConnectWithoutUserInputObjectSchema = Schema;
