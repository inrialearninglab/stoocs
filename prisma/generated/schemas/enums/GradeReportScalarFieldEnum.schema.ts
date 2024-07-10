import { z } from 'zod';

export const GradeReportScalarFieldEnumSchema = z.enum([
  'id',
  'date',
  'moocSessionId',
  'totalUsers',
  'totalActive',
  'totalCurious',
  'totalEligible',
  'score',
  'interest',
  'threshold',
]);
