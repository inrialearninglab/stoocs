import { z } from 'zod';
import { MoocCreateManyInputObjectSchema } from './objects/MoocCreateManyInput.schema';

export const MoocCreateManySchema = z.object({
  data: z.union([
    MoocCreateManyInputObjectSchema,
    z.array(MoocCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
