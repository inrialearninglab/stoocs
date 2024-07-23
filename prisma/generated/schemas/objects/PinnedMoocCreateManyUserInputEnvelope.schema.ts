import { z } from 'zod';
import { PinnedMoocCreateManyUserInputObjectSchema } from './PinnedMoocCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PinnedMoocCreateManyUserInputObjectSchema),
      z.lazy(() => PinnedMoocCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PinnedMoocCreateManyUserInputEnvelopeObjectSchema = Schema;
