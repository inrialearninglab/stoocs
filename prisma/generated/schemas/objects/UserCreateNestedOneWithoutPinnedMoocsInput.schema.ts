import { z } from 'zod';
import { UserCreateWithoutPinnedMoocsInputObjectSchema } from './UserCreateWithoutPinnedMoocsInput.schema';
import { UserUncheckedCreateWithoutPinnedMoocsInputObjectSchema } from './UserUncheckedCreateWithoutPinnedMoocsInput.schema';
import { UserCreateOrConnectWithoutPinnedMoocsInputObjectSchema } from './UserCreateOrConnectWithoutPinnedMoocsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPinnedMoocsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutPinnedMoocsInputObjectSchema = Schema;
