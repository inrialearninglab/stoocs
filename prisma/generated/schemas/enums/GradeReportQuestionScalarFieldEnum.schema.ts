import { z } from 'zod';

export const GradeReportQuestionScalarFieldEnumSchema = z.enum([
  'id',
  'userID',
  'label',
  'score',
  'lineID',
]);
