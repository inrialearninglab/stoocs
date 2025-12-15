import multer from 'multer';
import { callNodeListener } from 'h3';
import path from 'node:path';
import { prisma } from '#shared/prisma/db';
import { z } from 'zod';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/surveys');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
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
    },
});

const routerSchema = z.object({
    id: z.string(),
});

export default defineEventHandler(async (event) => {
    const { id } = await getValidatedRouterParams(event, routerSchema.parse);
    console.log('entering surveys');

    try {
        await callNodeListener(
            // @ts-expect-error: Nuxt 3
            upload.single('file'),
            event.node.req,
            event.node.res,
        );

        const filename = path.join('uploads', 'surveys', event.node.req.file.filename);

        const data = await readSurveys(filename);
    } catch (err) {
        console.log('error:', err);
    }
});
