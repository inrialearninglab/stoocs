import { z } from 'zod';
import { MoocWhereUniqueInputObjectSchema } from './objects/MoocWhereUniqueInput.schema';

export const MoocFindUniqueSchema = z.object({
  where: MoocWhereUniqueInputObjectSchema,
});
