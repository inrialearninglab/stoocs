import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MoocSessionUncheckedUpdateManyWithoutAuthorsNestedInputObjectSchema } from './MoocSessionUncheckedUpdateManyWithoutAuthorsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    firstname: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    lastname: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sessions: z
      .lazy(
        () =>
          MoocSessionUncheckedUpdateManyWithoutAuthorsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AuthorUncheckedUpdateInputObjectSchema = Schema;
