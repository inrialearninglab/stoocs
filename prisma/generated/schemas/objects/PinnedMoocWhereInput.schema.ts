import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { MoocRelationFilterObjectSchema } from './MoocRelationFilter.schema';
import { MoocWhereInputObjectSchema } from './MoocWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PinnedMoocWhereInputObjectSchema),
        z.lazy(() => PinnedMoocWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PinnedMoocWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PinnedMoocWhereInputObjectSchema),
        z.lazy(() => PinnedMoocWhereInputObjectSchema).array(),
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
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    mooc: z
      .union([
        z.lazy(() => MoocRelationFilterObjectSchema),
        z.lazy(() => MoocWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PinnedMoocWhereInputObjectSchema = Schema;
