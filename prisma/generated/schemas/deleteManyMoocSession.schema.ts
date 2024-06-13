import { z } from 'zod';
import { MoocSessionWhereInputObjectSchema } from './objects/MoocSessionWhereInput.schema';

export const MoocSessionDeleteManySchema = z.object({
  where: MoocSessionWhereInputObjectSchema.optional(),
});
