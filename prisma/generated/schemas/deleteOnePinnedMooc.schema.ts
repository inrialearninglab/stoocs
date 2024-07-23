import { z } from 'zod';
import { PinnedMoocWhereUniqueInputObjectSchema } from './objects/PinnedMoocWhereUniqueInput.schema';

export const PinnedMoocDeleteOneSchema = z.object({
  where: PinnedMoocWhereUniqueInputObjectSchema,
});
