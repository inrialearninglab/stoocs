import { z } from 'zod';
import { PinnedMoocScalarWhereInputObjectSchema } from './PinnedMoocScalarWhereInput.schema';
import { PinnedMoocUpdateManyMutationInputObjectSchema } from './PinnedMoocUpdateManyMutationInput.schema';
import { PinnedMoocUncheckedUpdateManyWithoutPinnedMoocsInputObjectSchema } from './PinnedMoocUncheckedUpdateManyWithoutPinnedMoocsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PinnedMoocScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PinnedMoocUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PinnedMoocUncheckedUpdateManyWithoutPinnedMoocsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PinnedMoocUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
