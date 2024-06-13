import { z } from 'zod';
import { MoocWhereInputObjectSchema } from './objects/MoocWhereInput.schema';

export const MoocDeleteManySchema = z.object({
  where: MoocWhereInputObjectSchema.optional(),
});
