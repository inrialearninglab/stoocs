import { z } from 'zod';
import { MoocWhereUniqueInputObjectSchema } from './objects/MoocWhereUniqueInput.schema';

export const MoocDeleteOneSchema = z.object({
  where: MoocWhereUniqueInputObjectSchema,
});
