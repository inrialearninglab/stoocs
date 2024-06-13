import { z } from 'zod';
import { MoocSessionScalarWhereInputObjectSchema } from './MoocSessionScalarWhereInput.schema';
import { MoocSessionUpdateManyMutationInputObjectSchema } from './MoocSessionUpdateManyMutationInput.schema';
import { MoocSessionUncheckedUpdateManyWithoutMoocSessionInputObjectSchema } from './MoocSessionUncheckedUpdateManyWithoutMoocSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpdateManyWithWhereWithoutTypeInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MoocSessionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MoocSessionUncheckedUpdateManyWithoutMoocSessionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MoocSessionUpdateManyWithWhereWithoutTypeInputObjectSchema =
  Schema;
