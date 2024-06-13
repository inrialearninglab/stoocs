import { z } from 'zod';

export const MoocSessionScalarFieldEnumSchema = z.enum([
  'id',
  'sessionName',
  'enrollmentsDetails',
  'totalEnrollments',
  'startDate',
  'ended',
  'typeID',
  'moocID',
]);
