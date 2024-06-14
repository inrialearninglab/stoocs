import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    sessionName: z.literal(true).optional(),
    totalEnrollments: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    ended: z.literal(true).optional(),
    typeID: z.literal(true).optional(),
    moocID: z.literal(true).optional(),
  })
  .strict();

export const MoocSessionMaxAggregateInputObjectSchema = Schema;
