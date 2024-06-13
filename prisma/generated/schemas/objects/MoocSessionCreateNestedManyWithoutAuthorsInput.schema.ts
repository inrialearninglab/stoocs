import { z } from 'zod';
import { MoocSessionCreateWithoutAuthorsInputObjectSchema } from './MoocSessionCreateWithoutAuthorsInput.schema';
import { MoocSessionUncheckedCreateWithoutAuthorsInputObjectSchema } from './MoocSessionUncheckedCreateWithoutAuthorsInput.schema';
import { MoocSessionCreateOrConnectWithoutAuthorsInputObjectSchema } from './MoocSessionCreateOrConnectWithoutAuthorsInput.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionCreateNestedManyWithoutAuthorsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoocSessionCreateWithoutAuthorsInputObjectSchema),
          z
            .lazy(() => MoocSessionCreateWithoutAuthorsInputObjectSchema)
            .array(),
          z.lazy(
            () => MoocSessionUncheckedCreateWithoutAuthorsInputObjectSchema,
          ),
          z
            .lazy(
              () => MoocSessionUncheckedCreateWithoutAuthorsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MoocSessionCreateOrConnectWithoutAuthorsInputObjectSchema,
          ),
          z
            .lazy(
              () => MoocSessionCreateOrConnectWithoutAuthorsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MoocSessionCreateNestedManyWithoutAuthorsInputObjectSchema =
  Schema;
