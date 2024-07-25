import { z } from 'zod';

export const InvitationScalarFieldEnumSchema = z.enum([
  'tokenHash',
  'email',
  'expiresAt',
]);
