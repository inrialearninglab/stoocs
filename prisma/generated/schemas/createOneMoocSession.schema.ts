import { z } from 'zod';
import { MoocSessionCreateInputObjectSchema } from './objects/MoocSessionCreateInput.schema';
import { MoocSessionUncheckedCreateInputObjectSchema } from './objects/MoocSessionUncheckedCreateInput.schema';

export const MoocSessionCreateOneSchema = z.object({
  data: z.union([
    MoocSessionCreateInputObjectSchema,
    MoocSessionUncheckedCreateInputObjectSchema,
  ]),
});
