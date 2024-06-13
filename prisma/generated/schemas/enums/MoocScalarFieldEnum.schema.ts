import { z } from 'zod';

export const MoocScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'theme',
  'target',
]);
