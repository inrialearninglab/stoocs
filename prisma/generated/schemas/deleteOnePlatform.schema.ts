import { z } from 'zod';
import { PlatformWhereUniqueInputObjectSchema } from './objects/PlatformWhereUniqueInput.schema';

export const PlatformDeleteOneSchema = z.object({
  where: PlatformWhereUniqueInputObjectSchema,
});
