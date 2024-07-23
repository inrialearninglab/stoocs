import { z } from 'zod';
import { UserCreateWithoutPinnedMoocsInputObjectSchema } from './UserCreateWithoutPinnedMoocsInput.schema';
import { UserUncheckedCreateWithoutPinnedMoocsInputObjectSchema } from './UserUncheckedCreateWithoutPinnedMoocsInput.schema';
import { UserCreateOrConnectWithoutPinnedMoocsInputObjectSchema } from './UserCreateOrConnectWithoutPinnedMoocsInput.schema';
import { UserUpsertWithoutPinnedMoocsInputObjectSchema } from './UserUpsertWithoutPinnedMoocsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPinnedMoocsInputObjectSchema } from './UserUpdateWithoutPinnedMoocsInput.schema';
import { UserUncheckedUpdateWithoutPinnedMoocsInputObjectSchema } from './UserUncheckedUpdateWithoutPinnedMoocsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPinnedMoocsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPinnedMoocsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutPinnedMoocsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutPinnedMoocsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutPinnedMoocsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutPinnedMoocsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutPinnedMoocsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutPinnedMoocsNestedInputObjectSchema =
  Schema;
