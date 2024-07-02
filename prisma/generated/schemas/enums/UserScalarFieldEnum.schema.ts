import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'firstname',
  'lastname',
  'password',
]);
