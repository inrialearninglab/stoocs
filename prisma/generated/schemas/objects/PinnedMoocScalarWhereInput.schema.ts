import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PinnedMoocScalarWhereInputObjectSchema),
        z.lazy(() => PinnedMoocScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PinnedMoocScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PinnedMoocScalarWhereInputObjectSchema),
        z.lazy(() => PinnedMoocScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    moocId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const PinnedMoocScalarWhereInputObjectSchema = Schema;
