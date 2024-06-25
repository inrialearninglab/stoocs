import { createReadStream } from 'fs';
import { parse } from 'csv';

export async function readEnrollments(filename: string): Promise<any> {
    const results: any[] = [];
    
    return new Promise((resolve, reject) => {
        createReadStream(filename)
            .pipe(parse({ columns: true }))
            .on('data', (data) => {
                data.date = data.date.replace(/\//g, '-');
                data.enrollments = Number(data.enrollments);
                results.push(data);
            })
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error))
    })
}