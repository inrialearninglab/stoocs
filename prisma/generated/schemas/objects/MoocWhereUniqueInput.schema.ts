import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    title: z.string().optional(),
  })
  .strict();

export const MoocWhereUniqueInputObjectSchema = Schema;
