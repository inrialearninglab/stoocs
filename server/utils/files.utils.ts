import { createReadStream } from 'fs';
import { parse } from 'csv';

export async function readEnrollments(filename: string): Promise<any> {
    const results: any[] = [];
    let isHeader = true;
    
    return new Promise((resolve, reject) => {
        createReadStream(filename)
            .pipe(parse({ columns: true }))
            .on('data', (data) => {
                if (isHeader) {
                    if (!data.date || !data.enrollments) {
                        reject('Invalid CSV Format');
                        return
                    }
                    isHeader = false;
                }
                data.date = data.date.replace(/\//g, '-');
                data.enrollments = Number(data.enrollments);
                results.push(data);
            })
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error))
    })
}

export async function readGradeReports(gradeReport: string, probemGradeReport: string): Promise<any> {
    let report = await readGradeReport(gradeReport);
    report = await readProblemGradeReport(probemGradeReport, report);
    
    return report;
}

async function readGradeReport(filename: string): Promise<any> {
    const report: any[] = [];
    
    await new Promise((resolve, reject) => {
        createReadStream(filename)
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
    
    return report;
}

async function readProblemGradeReport(filename: string, report: any) {
    await new Promise((resolve, reject) => {
        createReadStream(filename)
            .pipe(parse({ columns: true }))
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

function getResultValue(value: string) {
    if (value === 'N/A') return undefined;
    if (value.endsWith('.0')) return Number(value);
    return 0
}
