import { z } from 'zod';

export const PinnedMoocScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'moocId',
]);
