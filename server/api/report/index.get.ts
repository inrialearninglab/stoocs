import { getReport } from '~/server/mocks/gradeReports';

export default defineEventHandler(async (event) => {
    const gradeReport = await getReport();
    
    return { gradeReport };
})