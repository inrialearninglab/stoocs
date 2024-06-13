import { z } from 'zod';
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema';
import { AuthorCreateWithoutSessionsInputObjectSchema } from './AuthorCreateWithoutSessionsInput.schema';
import { AuthorUncheckedCreateWithoutSessionsInputObjectSchema } from './AuthorUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorCreateOrConnectWithoutSessionsInput> = z
  .object({
    where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AuthorCreateWithoutSessionsInputObjectSchema),
      z.lazy(() => AuthorUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict();

export const AuthorCreateOrConnectWithoutSessionsInputObjectSchema = Schema;
