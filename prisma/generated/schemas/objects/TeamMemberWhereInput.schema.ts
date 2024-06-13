import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { MoocSessionListRelationFilterObjectSchema } from './MoocSessionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TeamMemberWhereInputObjectSchema),
        z.lazy(() => TeamMemberWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TeamMemberWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TeamMemberWhereInputObjectSchema),
        z.lazy(() => TeamMemberWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    firstname: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sessions: z
      .lazy(() => MoocSessionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const TeamMemberWhereInputObjectSchema = Schema;
