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
        
        const gradeReport = await readGradeReports(gradeReportFile, problemGradeReportFile);
        
        return prisma.moocSession.update({
            where: { id },
            data: {
                gradeReports: {
                    create: [gradeReport]
                }
            },
            select: {
                id: true,
                gradeReports: true
            }
        });
    } catch(err) {
        console.log(err);
    }
})