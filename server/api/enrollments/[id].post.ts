import multer from 'multer';
import { callNodeListener } from 'h3';
import path from 'node:path';
import { readEnrollments } from '~/server/utils/files.utils';
import { prisma } from '~/prisma/db';

let originalFilename = '';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/enrollments');
    },
    filename: (req, file, cb) => {
        // Today date in iso format
        const date = new Date().toISOString().split('T')[0];
        // @ts-expect-error: adding id to filename
        originalFilename = `${req.id}-${date}-${file.originalname}`;
        cb(null, originalFilename);
    }
})

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
    // @ts-expect-error: adding id to req
    event.node.req.id = id;
    
    try {
        await callNodeListener(
            // @ts-expect-error: Nuxt 3
            upload.single('file'),
            event.node.req,
            event.node.res
        );
        const filename = `uploads/enrollments/${originalFilename}`;
        
        try {
            const enrollments = await readEnrollments(filename);
            
            return prisma.moocSession.update({
                where: { id },
                data: {
                    enrollmentsDetails: enrollments
                },
                select: {
                    id: true,
                    enrollmentsDetails: true
                }
            })
        } catch {
            return createError({
                statusCode: 400,
                statusMessage: 'Invalid CSV Format'
            })
        }
    } catch(error) {
        console.log(error);
        return createError({
            statusCode: 500,
            statusMessage: 'Something went wrong.',
        })
    }
})