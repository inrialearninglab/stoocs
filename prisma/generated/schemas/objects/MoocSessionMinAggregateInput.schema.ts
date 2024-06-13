import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    sessionName: z.literal(true).optional(),
    totalEnrollments: z.literal(true).optional(),
    platformID: z.literal(true).optional(),
    typeID: z.literal(true).optional(),
    moocID: z.literal(true).optional(),
  })
  .strict();

export const MoocSessionMinAggregateInputObjectSchema = Schema;
