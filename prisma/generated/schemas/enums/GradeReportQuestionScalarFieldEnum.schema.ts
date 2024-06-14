import { z } from 'zod';

export const GradeReportQuestionScalarFieldEnumSchema = z.enum([
  'userID',
  'label',
  'score',
  'lineID',
]);
