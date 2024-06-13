import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './objects/MoocSessionWhereUniqueInput.schema';
import { MoocSessionCreateInputObjectSchema } from './objects/MoocSessionCreateInput.schema';
import { MoocSessionUncheckedCreateInputObjectSchema } from './objects/MoocSessionUncheckedCreateInput.schema';
import { MoocSessionUpdateInputObjectSchema } from './objects/MoocSessionUpdateInput.schema';
import { MoocSessionUncheckedUpdateInputObjectSchema } from './objects/MoocSessionUncheckedUpdateInput.schema';

export const MoocSessionUpsertSchema = z.object({
  where: MoocSessionWhereUniqueInputObjectSchema,
  create: z.union([
    MoocSessionCreateInputObjectSchema,
    MoocSessionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MoocSessionUpdateInputObjectSchema,
    MoocSessionUncheckedUpdateInputObjectSchema,
  ]),
});
