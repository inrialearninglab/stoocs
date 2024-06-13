import { z } from 'zod';
import { MoocSessionUpdateInputObjectSchema } from './objects/MoocSessionUpdateInput.schema';
import { MoocSessionUncheckedUpdateInputObjectSchema } from './objects/MoocSessionUncheckedUpdateInput.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './objects/MoocSessionWhereUniqueInput.schema';

export const MoocSessionUpdateOneSchema = z.object({
  data: z.union([
    MoocSessionUpdateInputObjectSchema,
    MoocSessionUncheckedUpdateInputObjectSchema,
  ]),
  where: MoocSessionWhereUniqueInputObjectSchema,
});
