import { z } from 'zod';

export const MoocScalarFieldEnumSchema = z.enum([
  'id',
  'organization',
  'title',
  'courseNumber',
  'description',
  'theme',
  'target',
]);
