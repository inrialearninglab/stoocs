import { createReadStream} from 'fs';
import { parse } from 'csv';

export async function getEnrollments() {
    const results: any = [];
    
    return new Promise((resolve, reject) => {
        createReadStream('server/mocks/enrollments/enrollments.csv')
            .pipe(parse({ columns: true }))
            .on('data', (data) => {
                data.enrollments = Number(data.enrollments);
                results.push(data);
            })
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error))
    });
}