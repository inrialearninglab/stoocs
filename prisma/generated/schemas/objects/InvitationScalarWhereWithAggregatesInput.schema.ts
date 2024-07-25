import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvitationScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    tokenHash: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    expiresAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
  })
  .strict();

export const InvitationScalarWhereWithAggregatesInputObjectSchema = Schema;
