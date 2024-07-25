import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvitationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvitationWhereInputObjectSchema),
        z.lazy(() => InvitationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvitationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvitationWhereInputObjectSchema),
        z.lazy(() => InvitationWhereInputObjectSchema).array(),
      ])
      .optional(),
    tokenHash: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    expiresAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const InvitationWhereInputObjectSchema = Schema;
