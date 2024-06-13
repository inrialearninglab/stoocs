import { z } from 'zod';
import { SessionTypeWhereUniqueInputObjectSchema } from './objects/SessionTypeWhereUniqueInput.schema';

export const SessionTypeFindUniqueSchema = z.object({
  where: SessionTypeWhereUniqueInputObjectSchema,
});
