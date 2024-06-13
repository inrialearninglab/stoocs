import { z } from 'zod';
import { MoocUpdateWithoutSessionsInputObjectSchema } from './MoocUpdateWithoutSessionsInput.schema';
import { MoocUncheckedUpdateWithoutSessionsInputObjectSchema } from './MoocUncheckedUpdateWithoutSessionsInput.schema';
import { MoocCreateWithoutSessionsInputObjectSchema } from './MoocCreateWithoutSessionsInput.schema';
import { MoocUncheckedCreateWithoutSessionsInputObjectSchema } from './MoocUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocUpsertWithoutSessionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MoocUpdateWithoutSessionsInputObjectSchema),
      z.lazy(() => MoocUncheckedUpdateWithoutSessionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MoocCreateWithoutSessionsInputObjectSchema),
      z.lazy(() => MoocUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict();

export const MoocUpsertWithoutSessionsInputObjectSchema = Schema;
