import { z } from 'zod';
import { MoocWhereUniqueInputObjectSchema } from './objects/MoocWhereUniqueInput.schema';
import { MoocCreateInputObjectSchema } from './objects/MoocCreateInput.schema';
import { MoocUncheckedCreateInputObjectSchema } from './objects/MoocUncheckedCreateInput.schema';
import { MoocUpdateInputObjectSchema } from './objects/MoocUpdateInput.schema';
import { MoocUncheckedUpdateInputObjectSchema } from './objects/MoocUncheckedUpdateInput.schema';

export const MoocUpsertSchema = z.object({
  where: MoocWhereUniqueInputObjectSchema,
  create: z.union([
    MoocCreateInputObjectSchema,
    MoocUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MoocUpdateInputObjectSchema,
    MoocUncheckedUpdateInputObjectSchema,
  ]),
});
