import { z } from 'zod';
import { MoocSessionScalarWhereInputObjectSchema } from './MoocSessionScalarWhereInput.schema';
import { MoocSessionUpdateManyMutationInputObjectSchema } from './MoocSessionUpdateManyMutationInput.schema';
import { MoocSessionUncheckedUpdateManyWithoutSessionsInputObjectSchema } from './MoocSessionUncheckedUpdateManyWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpdateManyWithWhereWithoutMoocInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MoocSessionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => MoocSessionUncheckedUpdateManyWithoutSessionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MoocSessionUpdateManyWithWhereWithoutMoocInputObjectSchema =
  Schema;
