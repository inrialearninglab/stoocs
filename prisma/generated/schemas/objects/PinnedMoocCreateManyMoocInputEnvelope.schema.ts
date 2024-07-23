import { z } from 'zod';
import { PinnedMoocCreateManyMoocInputObjectSchema } from './PinnedMoocCreateManyMoocInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocCreateManyMoocInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PinnedMoocCreateManyMoocInputObjectSchema),
      z.lazy(() => PinnedMoocCreateManyMoocInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PinnedMoocCreateManyMoocInputEnvelopeObjectSchema = Schema;
