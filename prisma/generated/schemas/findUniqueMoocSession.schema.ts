import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './objects/MoocSessionWhereUniqueInput.schema';

export const MoocSessionFindUniqueSchema = z.object({
  where: MoocSessionWhereUniqueInputObjectSchema,
});
