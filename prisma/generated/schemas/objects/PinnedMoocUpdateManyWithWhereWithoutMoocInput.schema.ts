import { z } from 'zod';
import { PinnedMoocScalarWhereInputObjectSchema } from './PinnedMoocScalarWhereInput.schema';
import { PinnedMoocUpdateManyMutationInputObjectSchema } from './PinnedMoocUpdateManyMutationInput.schema';
import { PinnedMoocUncheckedUpdateManyWithoutPinnedByInputObjectSchema } from './PinnedMoocUncheckedUpdateManyWithoutPinnedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUpdateManyWithWhereWithoutMoocInput> =
  z
    .object({
      where: z.lazy(() => PinnedMoocScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PinnedMoocUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => PinnedMoocUncheckedUpdateManyWithoutPinnedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PinnedMoocUpdateManyWithWhereWithoutMoocInputObjectSchema = Schema;
