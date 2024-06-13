import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './objects/MoocSessionWhereUniqueInput.schema';

export const MoocSessionDeleteOneSchema = z.object({
  where: MoocSessionWhereUniqueInputObjectSchema,
});
