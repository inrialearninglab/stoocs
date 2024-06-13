import { z } from 'zod';

export const MoocSessionScalarFieldEnumSchema = z.enum([
  'id',
  'sessionName',
  'enrollmentsDetails',
  'totalEnrollments',
  'platformID',
  'typeID',
  'moocID',
]);
