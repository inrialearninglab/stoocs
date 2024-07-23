import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MoocUpdateOneRequiredWithoutPinnedByNestedInputObjectSchema } from './MoocUpdateOneRequiredWithoutPinnedByNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUpdateWithoutUserInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    mooc: z
      .lazy(() => MoocUpdateOneRequiredWithoutPinnedByNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PinnedMoocUpdateWithoutUserInputObjectSchema = Schema;
