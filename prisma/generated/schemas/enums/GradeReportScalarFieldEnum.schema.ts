import { z } from 'zod';

export const GradeReportScalarFieldEnumSchema = z.enum([
  'id',
  'date',
  'moocSessionId',
  'totalActive',
  'totalCurious',
  'totalEligible',
  'score',
  'interest',
]);
