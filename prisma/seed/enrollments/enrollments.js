import { createReadStream} from 'fs';
import { parse } from 'csv';

export async function getEnrollments() {
    const results = [];
    
    return new Promise((resolve, reject) => {
        createReadStream('prisma/seed/enrollments/enrollments.csv')
            .pipe(parse({ columns: true }))
            .on('data', (data) => {
                data.date = data.date.replace(/\//g, '-');
                data.enrollments = Number(data.enrollments);
                results.push(data);
            })
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error))
    });
}