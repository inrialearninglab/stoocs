import { createReadStream } from 'fs';
import { parse } from 'csv';
import { GradeReport, ProblemGradeReportLine, ReportLine } from '~/types';
import { getLocalTimeZone, today } from '@internationalized/date';

export async function getReport(): Promise<GradeReport> {
    const res: GradeReport = {
        date: today(getLocalTimeZone()).toString(),
        report: []
    }
    
    // Read the grade report
    await new Promise((resolve, reject) => {
        createReadStream('server/mocks/gradeReports/gradeReport.csv')
            .pipe(parse({ columns: true }))
            .on('data', (data) => {
                const reportLine: ReportLine = {
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
                
                res.report.push(reportLine);
            })
            .on('end', () => resolve(res))
            .on('error', (error) => reject(error))
    })
    
    // Read the problem grade report
    await new Promise((resolve, reject) => {
        createReadStream('server/mocks/gradeReports/ProblemGradeReport.csv')
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
                            const problemGradeReportLine: ProblemGradeReportLine = {
                                label: labelWithoutParenthesis + ' ' + (i + 1),
                                score: getResultValue(score[i]),
                                possible: getResultValue(possible[i])
                            }
                            
                            const reportLine = res.report.find(reportLine => reportLine.id === id);
                            if (reportLine) {
                                reportLine.problemGradeReport.push(problemGradeReportLine);
                            } else {
                                console.log('Could not find report line with id', id);
                            }
                        }
                    } else {
                        const problemGradeReportLine: ProblemGradeReportLine = {
                            label: labelWithoutParenthesis,
                            score: getResultValue(score),
                            possible: getResultValue(possible)
                        }
                        
                        const reportLine = res.report.find(reportLine => reportLine.id === id);
                        if (reportLine) {
                            reportLine.problemGradeReport.push(problemGradeReportLine);
                        } else {
                            console.log('Could not find report line with id', id);
                        }
                    }
                }
            })
            .on('end', () => resolve(res))
            .on('error', (error) => reject(error))
    })
    
    return res;
}

function getResultValue(value: string): number | undefined {
    if (value === 'N/A') return undefined;
    if (value.endsWith('.0')) return Number(value)
    return 0
}