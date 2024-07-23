import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPinnedMoocsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPinnedMoocsNestedInput.schema';
import { MoocUpdateOneRequiredWithoutPinnedByNestedInputObjectSchema } from './MoocUpdateOneRequiredWithoutPinnedByNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(
        () => UserUpdateOneRequiredWithoutPinnedMoocsNestedInputObjectSchema,
      )
      .optional(),
    mooc: z
      .lazy(() => MoocUpdateOneRequiredWithoutPinnedByNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PinnedMoocUpdateInputObjectSchema = Schema;
