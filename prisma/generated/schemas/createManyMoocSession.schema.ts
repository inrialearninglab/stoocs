import { z } from 'zod';
import { MoocSessionCreateManyInputObjectSchema } from './objects/MoocSessionCreateManyInput.schema';

export const MoocSessionCreateManySchema = z.object({
  data: z.union([
    MoocSessionCreateManyInputObjectSchema,
    z.array(MoocSessionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
