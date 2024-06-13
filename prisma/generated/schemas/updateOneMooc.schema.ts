import { z } from 'zod';
import { MoocUpdateInputObjectSchema } from './objects/MoocUpdateInput.schema';
import { MoocUncheckedUpdateInputObjectSchema } from './objects/MoocUncheckedUpdateInput.schema';
import { MoocWhereUniqueInputObjectSchema } from './objects/MoocWhereUniqueInput.schema';

export const MoocUpdateOneSchema = z.object({
  data: z.union([
    MoocUpdateInputObjectSchema,
    MoocUncheckedUpdateInputObjectSchema,
  ]),
  where: MoocWhereUniqueInputObjectSchema,
});
