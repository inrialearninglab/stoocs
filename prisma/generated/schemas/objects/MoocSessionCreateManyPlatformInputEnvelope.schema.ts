import { z } from 'zod';
import { MoocSessionCreateManyPlatformInputObjectSchema } from './MoocSessionCreateManyPlatformInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionCreateManyPlatformInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MoocSessionCreateManyPlatformInputObjectSchema),
      z.lazy(() => MoocSessionCreateManyPlatformInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MoocSessionCreateManyPlatformInputEnvelopeObjectSchema = Schema;
