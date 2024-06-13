import { z } from 'zod';
import { MoocSessionCreateManyMoocInputObjectSchema } from './MoocSessionCreateManyMoocInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionCreateManyMoocInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MoocSessionCreateManyMoocInputObjectSchema),
      z.lazy(() => MoocSessionCreateManyMoocInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MoocSessionCreateManyMoocInputEnvelopeObjectSchema = Schema;
