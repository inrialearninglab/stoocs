import { z } from 'zod';
import { PinnedMoocWhereUniqueInputObjectSchema } from './PinnedMoocWhereUniqueInput.schema';
import { PinnedMoocCreateWithoutMoocInputObjectSchema } from './PinnedMoocCreateWithoutMoocInput.schema';
import { PinnedMoocUncheckedCreateWithoutMoocInputObjectSchema } from './PinnedMoocUncheckedCreateWithoutMoocInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocCreateOrConnectWithoutMoocInput> = z
  .object({
    where: z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PinnedMoocCreateWithoutMoocInputObjectSchema),
      z.lazy(() => PinnedMoocUncheckedCreateWithoutMoocInputObjectSchema),
    ]),
  })
  .strict();

export const PinnedMoocCreateOrConnectWithoutMoocInputObjectSchema = Schema;
