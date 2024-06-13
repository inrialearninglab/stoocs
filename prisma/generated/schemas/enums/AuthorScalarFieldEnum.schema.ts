import { z } from 'zod';

export const AuthorScalarFieldEnumSchema = z.enum([
  'id',
  'firstname',
  'lastName',
]);
