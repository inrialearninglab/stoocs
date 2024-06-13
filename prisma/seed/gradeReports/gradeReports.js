import { createReadStream } from 'fs';
import { parse } from 'csv';

export async function getReport() {
    const report = []

    // Read the grade report
    await new Promise((resolve, reject) => {
        createReadStream('prisma/seed/gradeReports/gradeReport.csv')
            .pipe(parse({ columns: true }))
            .on('data', (data) => {
                const reportLine = {
                    id: Number(data.id),
                    grade: Number(data.grade),
                    certificateEligible: data['Certificate Eligible'],
                    certificateDelivered: data['Certificate Delivered'],
                    questions: [],
                    problemGradeReport: []
                }
                const othersKeys = ['id', 'username', 'grade', 'Enrollment Track', 'Verification Status', 'Certificate Eligible', 'Certificate Delivered', 'Certificate Type'];
                const questions = Object.keys(data).filter(key => !othersKeys.includes(key));
                
                questions.forEach((question) => {
                    reportLine.questions.push({
                        label: question,
                        score: Number(data[question])
                    });
                });
                
                report.push(reportLine);
            })
            .on('end', () => resolve(report))
            .on('error', (error) => reject(error))
    })
    
    // Read the problem grade report
    await new Promise((resolve, reject) => {
        createReadStream('prisma/seed/gradeReports/ProblemGradeReport.csv')
            .pipe(parse({ columns: true, group_columns_by_name: true }))
            .on('data', (data) => {
                const id = Number(data['Student ID']);

                delete data['Student ID']
                delete data['Username']
                delete data['Final Grade']

                const cols = Object.keys(data);
                
                for (let i = 0; i < cols.length; i += 2) {
                    const score = data[cols[i]];
                    const possible = data[cols[i + 1]];
                    const label = cols[i];

                    // in the label i have to remove the parenthesis at the end
                    const labelArray = label.split(' ');
                    labelArray.pop();
                    const labelWithoutParenthesis = labelArray.join(' ');
                    
                    // create multiple problemGradeReportLine if score is an array
                    if (Array.isArray(score)) {
                        for (let i = 0; i < score.length; i++) {
                            const problemGradeReportLine = {
                                label: labelWithoutParenthesis + ' ' + (i + 1),
                                score: getResultValue(score[i]),
                                possible: getResultValue(possible[i])
                            }
                            
                            const reportLine = report.find(reportLine => reportLine.id === id);
                            if (reportLine) {
                                reportLine.problemGradeReport.push(problemGradeReportLine);
                            } else {
                                console.log('Could not find report line with id', id);
                            }
                        }
                    } else {
                        const problemGradeReportLine = {
                            label: labelWithoutParenthesis,
                            score: getResultValue(score),
                            possible: getResultValue(possible)
                        }
                        
                        const reportLine = report.find(reportLine => reportLine.id === id);
                        if (reportLine) {
                            reportLine.problemGradeReport.push(problemGradeReportLine);
                        } else {
                            console.log('Could not find report line with id', id);
                        }
                    }
                }
            })
            .on('end', () => resolve(report))
            .on('error', (error) => reject(error))
    })
    
    return report;
}

function getResultValue(value) {
    if (value === 'N/A') return undefined;
    if (value.endsWith('.0')) return Number(value)
    return 0
}