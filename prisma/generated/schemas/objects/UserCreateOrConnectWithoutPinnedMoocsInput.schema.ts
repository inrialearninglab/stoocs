import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPinnedMoocsInputObjectSchema } from './UserCreateWithoutPinnedMoocsInput.schema';
import { UserUncheckedCreateWithoutPinnedMoocsInputObjectSchema } from './UserUncheckedCreateWithoutPinnedMoocsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPinnedMoocsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPinnedMoocsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPinnedMoocsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutPinnedMoocsInputObjectSchema = Schema;
