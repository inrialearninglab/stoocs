import { z } from 'zod';
import { PinnedMoocWhereUniqueInputObjectSchema } from './objects/PinnedMoocWhereUniqueInput.schema';

export const PinnedMoocFindUniqueSchema = z.object({
  where: PinnedMoocWhereUniqueInputObjectSchema,
});
