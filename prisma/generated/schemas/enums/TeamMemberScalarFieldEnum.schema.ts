import { z } from 'zod';

export const TeamMemberScalarFieldEnumSchema = z.enum([
  'id',
  'firstname',
  'lastname',
]);
