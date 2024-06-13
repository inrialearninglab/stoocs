import { z } from 'zod';
import { SessionTypeWhereUniqueInputObjectSchema } from './objects/SessionTypeWhereUniqueInput.schema';

export const SessionTypeDeleteOneSchema = z.object({
  where: SessionTypeWhereUniqueInputObjectSchema,
});
