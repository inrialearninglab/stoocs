import { z } from 'zod';
import { UserUpdateWithoutPinnedMoocsInputObjectSchema } from './UserUpdateWithoutPinnedMoocsInput.schema';
import { UserUncheckedUpdateWithoutPinnedMoocsInputObjectSchema } from './UserUncheckedUpdateWithoutPinnedMoocsInput.schema';
import { UserCreateWithoutPinnedMoocsInputObjectSchema } from './UserCreateWithoutPinnedMoocsInput.schema';
import { UserUncheckedCreateWithoutPinnedMoocsInputObjectSchema } from './UserUncheckedCreateWithoutPinnedMoocsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutPinnedMoocsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPinnedMoocsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPinnedMoocsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPinnedMoocsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPinnedMoocsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutPinnedMoocsInputObjectSchema = Schema;
