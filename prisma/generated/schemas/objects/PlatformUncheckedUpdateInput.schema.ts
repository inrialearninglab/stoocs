import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MoocSessionUncheckedUpdateManyWithoutPlatformNestedInputObjectSchema } from './MoocSessionUncheckedUpdateManyWithoutPlatformNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PlatformUncheckedUpdateInput> = z
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
      .lazy(
        () =>
          MoocSessionUncheckedUpdateManyWithoutPlatformNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PlatformUncheckedUpdateInputObjectSchema = Schema;
