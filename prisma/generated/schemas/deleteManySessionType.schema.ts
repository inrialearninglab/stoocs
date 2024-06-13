import { z } from 'zod';
import { SessionTypeWhereInputObjectSchema } from './objects/SessionTypeWhereInput.schema';

export const SessionTypeDeleteManySchema = z.object({
  where: SessionTypeWhereInputObjectSchema.optional(),
});
