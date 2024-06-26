import multer from 'multer';
import { callNodeListener } from 'h3';
import path from 'node:path';
import { prisma } from '~/prisma/db';
import { readGradeReports } from '~/server/utils/files.utils';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/reports')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'text/csv') {
            return cb(new Error('Only CSV files are allowed'));
        }
        
        if (path.extname(file.originalname) !== '.csv') {
            return cb(new Error('Only CSV files are allowed'));
        }
        
        cb(null, true);
    }
})

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    
    try {
        await callNodeListener(
            // @ts-expect-error: Nuxt 3
            upload.fields([{ name: 'gradeReport', maxCount: 1}, { name: 'problemGradeReport', maxCount: 1 }]),
            event.node.req,
            event.node.res
        )
        
        // @ts-expect-error: Nuxt 3
        const gradeReportFile = event.node.req.files.gradeReport[0].path;
        // @ts-expect-error: Nuxt 3
        const problemGradeReportFile = event.node.req.files.problemGradeReport[0].path;
        
        
        const report = await readGradeReports(gradeReportFile, problemGradeReportFile);
        
        const gradeReportData = {
            date: new Date('2021-01-01'),
            gradeReportLines: {
                create: []
            }
        }
        
        for (const reportLine of report) {
            const gradeReportQuestions = reportLine.questions.map((question) => {
                return {
                    userID: reportLine.id,
                    label: question.label,
                    score: question.score
                }
            });

            const gradeReportProblems = reportLine.problemGradeReport.map((problem) => {
                return {
                    userID: reportLine.id,
                    label: problem.label,
                    score: problem.score,
                    possible: problem.possible
                }
            });

            const gradeReportLine = {
                userID: reportLine.id,
                grade: reportLine.grade,
                certificateEligible: reportLine.certificateEligible,
                certificateDelivered: reportLine.certificateDelivered,
                gradeReportQuestions: {
                    create: gradeReportQuestions
                },
                gradeReportProblems: {
                    create: gradeReportProblems
                }
            }
            gradeReportData.gradeReportLines.create.push(gradeReportLine);
        }
        
        
        const session = await prisma.moocSession.update({
            where: { id },
            data: {
                gradeReports: {
                    create: [gradeReportData]
                }
            },
            select: {
                id: true,
                gradeReports: true
            }
        });

        return { session };
    } catch(err) {
        console.log(err);
    }
})