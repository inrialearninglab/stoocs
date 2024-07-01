import { readFile } from 'fs';

// read the courses.json file and seed the database with the courses
export async function getCourses(): Promise<{ courses: any, sessions: any }> {
    return new Promise((resolve, reject) => {
        readFile('prisma/seed/courses/courses.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            const jsonData = JSON.parse(data);
            const courses = jsonData.map((course: any) => {
                return {
                    title: course['Course Display Name:'],
                    courseNumber: course['Course Number:'],
                    organization: course['Organization:'],
                }
            });

            const sessions = jsonData.map((session: any) => {
                const startDateString = session['Course Start Date:'].replace(' at ', ' ');
                const startDate = new Date(startDateString);

                const endDateString = session['Course End Date:'].replace(' at ', ' ');
                const endDate = new Date(endDateString);
                return {
                    parentCourse: session['Course Number:'],
                    sessionName: session['Course Name:'],
                    ended: session['Has the course ended?'] === 'Yes',
                    startDate,
                    endDate,
                }
            })
            resolve({ courses, sessions })
        });
    });
}