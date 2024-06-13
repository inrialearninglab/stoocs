import { z } from 'zod';

export const GradeReportLineScalarFieldEnumSchema = z.enum([
  'userID',
  'grade',
  'certificateEligible',
  'certificateDelivered',
  'gradeReportID',
]);
