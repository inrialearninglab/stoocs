import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TeamMemberScalarWhereInputObjectSchema),
        z.lazy(() => TeamMemberScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TeamMemberScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TeamMemberScalarWhereInputObjectSchema),
        z.lazy(() => TeamMemberScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    firstname: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastname: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const TeamMemberScalarWhereInputObjectSchema = Schema;
