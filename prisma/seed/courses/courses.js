import { readFile } from 'fs';

// read the courses.json file and seed the database with the courses
export async function getCourses() {
    return new Promise((resolve, reject) => {
        readFile('prisma/seed/courses/courses.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            const jsonData = JSON.parse(data);
            const courses = jsonData.map((course) => {
                return {
                    title: course['Course Display Name:'],
                    organization: course['Organization:'],
                }
            });

            const sessions = jsonData.map((session) => {
                return {
                    parentCourse: session['Course Display Name:'],
                    sessionName: session['Course Name:'],
                    ended: session['Has the course ended?'] === 'Yes'
                }
            })
            resolve({ courses, sessions })
        });
    });
}