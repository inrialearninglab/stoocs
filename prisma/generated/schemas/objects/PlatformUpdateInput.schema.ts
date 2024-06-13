import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MoocSessionUpdateManyWithoutPlatformNestedInputObjectSchema } from './MoocSessionUpdateManyWithoutPlatformNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PlatformUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    MoocSession: z
      .lazy(() => MoocSessionUpdateManyWithoutPlatformNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PlatformUpdateInputObjectSchema = Schema;
