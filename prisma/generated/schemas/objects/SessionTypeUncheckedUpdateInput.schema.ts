import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MoocSessionUncheckedUpdateManyWithoutTypeNestedInputObjectSchema } from './MoocSessionUncheckedUpdateManyWithoutTypeNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    MoocSession: z
      .lazy(
        () => MoocSessionUncheckedUpdateManyWithoutTypeNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SessionTypeUncheckedUpdateInputObjectSchema = Schema;
