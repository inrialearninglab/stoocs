import { z } from 'zod';
import { MoocSessionCreateManyTypeInputObjectSchema } from './MoocSessionCreateManyTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionCreateManyTypeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MoocSessionCreateManyTypeInputObjectSchema),
      z.lazy(() => MoocSessionCreateManyTypeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MoocSessionCreateManyTypeInputEnvelopeObjectSchema = Schema;
