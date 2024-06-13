import { z } from 'zod';

export const GradeReportQuestionLineScalarFieldEnumSchema = z.enum([
  'userID',
  'label',
  'score',
  'lineID',
]);
