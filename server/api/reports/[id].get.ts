import { prisma } from '~/prisma/db';
import { isUserActive, isUserCurious, getInterestData, getScoreData } from '~/server/utils';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    
    const report = await prisma.gradeReport.findUnique({
        where: { id },
        select: {
            id: true,
            date: true,
            gradeReportLines: {
                select: {
                    userID: true,
                    grade: true,
                    certificateEligible: true,
                    certificateDelivered: true,
                    gradeReportQuestions: {
                        select: {
                            userID: true,
                            label: true,
                            score: true
                        }
                    },
                    gradeReportProblems: {
                        select: {
                            userID: true,
                            label: true,
                            score: true,
                            possible: true
                        }
                    }
                }
            }
        }
    })
    
    if (!report) return createError({
        statusCode: 404,
        message: 'Report not found'
    });
    
    // indicators
    const totalActive = report.gradeReportLines.filter(isUserActive).length;
    const totalCurious = report.gradeReportLines.filter(isUserCurious).length;
    const totalEligible = report.gradeReportLines.filter(line => line.certificateEligible === 'Y').length;
    
    // participation
   const participation = getInterestData(report);
   
    // score
    const score = getScoreData(report);
    
    return { totalActive, totalCurious, totalEligible, participation, score };
})