import { prisma } from '~/prisma/db';

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
    
    return { report };
})