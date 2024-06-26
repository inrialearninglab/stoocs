import { z } from 'zod';

export const GradeReportLineScalarFieldEnumSchema = z.enum([
  'id',
  'userID',
  'grade',
  'certificateEligible',
  'certificateDelivered',
  'gradeReportID',
]);
