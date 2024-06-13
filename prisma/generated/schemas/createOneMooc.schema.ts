import { z } from 'zod';
import { MoocCreateInputObjectSchema } from './objects/MoocCreateInput.schema';
import { MoocUncheckedCreateInputObjectSchema } from './objects/MoocUncheckedCreateInput.schema';

export const MoocCreateOneSchema = z.object({
  data: z.union([
    MoocCreateInputObjectSchema,
    MoocUncheckedCreateInputObjectSchema,
  ]),
});
