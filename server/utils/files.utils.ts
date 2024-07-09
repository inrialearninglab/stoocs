import { createReadStream } from 'fs';
import { parse } from 'csv';
import type { GradeReport, GradeReportData, GradeReportLine } from '~/types';
import { isUserActive, isUserCurious } from '~/server/utils/usersStatus.utils';
import { getInterestData, getPassingThresholdData, getScoreData } from '~/server/utils/graph.utils';
import { extractMetadata } from '~/utils';

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
    });
}

export async function readGradeReports(gradeReportPath: string, probemGradeReportPath: string): Promise<Omit<GradeReport, 'id'>> {
    let report = await readGradeReport(gradeReportPath);
    report = await readProblemGradeReport(probemGradeReportPath, report);
    
    const metaData = extractMetadata(gradeReportPath);
    
    const gradeReportData: GradeReportData = {
        date: new Date(metaData?.date || Date.now()),
        gradeReportLines: []
    };
    
    for (const reportLine of report) {
        const gradeReportQuestions = reportLine.questions.map((question: { label: string, score: number }) => {
            return {
                userID: reportLine.id,
                label: question.label,
                score: question.score
            }
        })
        
        const gradeReportProblems = reportLine.problemGradeReport.map((problem: { label: string, score: number, possible: number }) => {
            return {
                userID: reportLine.id,
                label: problem.label,
                score: problem.score,
                possible: problem.possible
            }
        })
        
        const gradeReportLine: GradeReportLine = {
            userID: reportLine.id,
            grade: reportLine.grade,
            certificateEligible: reportLine.certificateEligible,
            certificateDelivered: reportLine.certificateDelivered,
            gradeReportQuestions,
            gradeReportProblems
        }
        
        gradeReportData.gradeReportLines.push(gradeReportLine);
    }
    
    const totalActive = gradeReportData.gradeReportLines.filter(isUserActive).length;

    return {
        date: gradeReportData.date,
        totalActive: totalActive,
        totalCurious: gradeReportData.gradeReportLines.filter(isUserCurious).length,
        totalEligible: gradeReportData.gradeReportLines.filter(line => line.certificateEligible === 'Y').length,
        score: getScoreData(gradeReportData),
        interest: getInterestData(gradeReportData, totalActive),
        threshold: getPassingThresholdData(gradeReportData)
    };
}

async function readGradeReport(filename: string): Promise<any> {
    const lines: any[] = []
    
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
                
                questions.forEach((question: any) => {
                    reportLine.questions.push({
                        label: question,
                        score: Number(data[question])
                    });
                });
                
                lines.push(reportLine);
            })
            .on('end', () => resolve(lines))
            .on('error', (error) => reject(error))
    })
    
    return lines;
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
                            
                            const reportLine = report.find((reportLine: any) => reportLine.id === id);
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
                        
                        const reportLine = report.find((reportLine: any) => reportLine.id === id);
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
