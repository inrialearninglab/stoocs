import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MoocSessionUpdateManyWithoutTypeNestedInputObjectSchema } from './MoocSessionUpdateManyWithoutTypeNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeUpdateInput> = z
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
      .lazy(() => MoocSessionUpdateManyWithoutTypeNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SessionTypeUpdateInputObjectSchema = Schema;
