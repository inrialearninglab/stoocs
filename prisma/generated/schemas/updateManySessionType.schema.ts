import { z } from 'zod';
import { SessionTypeUpdateManyMutationInputObjectSchema } from './objects/SessionTypeUpdateManyMutationInput.schema';
import { SessionTypeWhereInputObjectSchema } from './objects/SessionTypeWhereInput.schema';

export const SessionTypeUpdateManySchema = z.object({
  data: SessionTypeUpdateManyMutationInputObjectSchema,
  where: SessionTypeWhereInputObjectSchema.optional(),
});
