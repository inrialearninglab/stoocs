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
                // data.id = Number(data.id);
                // data.grade = Number(data.grade);
                //
                //
                // delete data.username;
                // delete data['Enrollment Track'];
                // delete data['Verification Status'];
                // delete data['Certificate Type'];
                
                // res.report.push(data);
            })
            .on('end', () => resolve(res))
            .on('error', (error) => reject(error))
    })
    
    // Read the problem grade report
    await new Promise((resolve, reject) => {
        createReadStream('server/mocks/gradeReports/ProblemGradeReport.csv')
            .pipe(parse({ columns: true }))
            .on('data', (data) => {
                const id = Number(data['Student ID']);
                
                delete data['Student ID']
                delete data['Username']
                delete data['Final Grade']
                
                const lines = Object.keys(data);
                
                for (let i = 0; i < lines.length; i += 2) {
                    const score = data[lines[i]];
                    const possible = data[lines[i + 1]];
                    const label = lines[i];
                    
                    // in the label i have to remove the parenthesis at the end
                    const labelArray = label.split(' ');
                    labelArray.pop();
                    const labelWithoutParenthesis = labelArray.join(' ');
                    
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
                
            })
            .on('end', () => resolve(res))
            .on('error', (error) => reject(error))
    })
    
    return res;
}

function getResultValue(value: string): number | undefined {
    switch(value) {
        case 'N/A':
            return undefined
        case '1':
            return 0
        default:
            return Number(value)
    }
}