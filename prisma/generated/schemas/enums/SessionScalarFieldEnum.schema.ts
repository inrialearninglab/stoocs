import { z } from 'zod';

export const SessionScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'expiresAt',
]);
