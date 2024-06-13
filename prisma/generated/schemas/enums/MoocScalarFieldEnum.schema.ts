import { z } from 'zod';

export const MoocScalarFieldEnumSchema = z.enum([
  'id',
  'organization',
  'title',
  'description',
  'theme',
  'target',
]);
