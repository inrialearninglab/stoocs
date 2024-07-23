import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPinnedMoocsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPinnedMoocsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUpdateWithoutMoocInput> = z
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
  })
  .strict();

export const PinnedMoocUpdateWithoutMoocInputObjectSchema = Schema;
