import type { GradeReport, GradeReportData } from '~/types/gradeReport.type';

export function getPassingThresholdData(gradeReport: GradeReportData) {
    const data = [];
    
    const thresholds = [];
    for (let i = 10; i <= 100; i += 5) {
        thresholds.push(i);
    }
    for (const threshold of thresholds) {
        const eligible = gradeReport.gradeReportLines.filter((line) => line.grade >= threshold / 100);
        
        data.push({
            threshold: `${threshold}%`,
            'Eligible': eligible.length
        });
    }
    
    return data;
}

export function getInterestData(gradeReport: GradeReportData, totalActive: number): GradeReport['interest'] {
    let data = [];
    
    const firstLine = gradeReport.gradeReportLines[0];
    const questions = firstLine.gradeReportQuestions;
    
    const participation = calculateParticipationPercentage(gradeReport, totalActive);
    for (const question of questions) {
        data.push({
            name: question.label,
            'Participation' : participation[question.label] ?? 0
        })
    }
    
    // Remove the Average because i don't really understand how to use it
    data = data.filter((item) => !item.name.endsWith('Avg'));
    // Sorting by name because there is some strange choice of order in the default data
    data.sort((a, b) => a.name > b.name ? 1 : -1);
    
    return data;
}

export function getScoreData(gradeReport: GradeReportData): GradeReport['score'] {
    let data = [];
    
    const firstLine = gradeReport.gradeReportLines[0];
    const problems = firstLine.gradeReportProblems;
    
    const problemAverages = calculateProblemAverage(gradeReport);
    for (const problem of problems) {
        data.push({
            name: problem.label,
            'Moyenne': problemAverages[problem.label] ?? 0
        })
    }
    
    return data.sort((a, b) => a.name > b.name ? 1 : -1);
}

/**
 * @description - This function calculates a score by user for each problem before calculating the average
 * @remarks
 * This function only takes into account the users that have responded to the problem.
 * For a given problem each user can have a different possible so we to calculate a percentage per question for each user.
 * @param gradeReport
 */
export function calculateProblemAverage(gradeReport: GradeReportData) {
    const problemStats:{ [key: string]: { total: number, score: number }} = {};
    
    gradeReport.gradeReportLines.forEach((reportLine) =>  {
        reportLine.gradeReportProblems.forEach((problem) => {
            if (!problemStats[problem.label]) {
                if (problem.possible && problem.possible > 0) {
                    if (!problem.score) problem.score = 0;
                    problemStats[problem.label] = { total: 1, score: problem.score / problem.possible }
                }
            } else if(problem.possible && problem.possible > 0) {
                if(!problem.score) problem.score = 0;
                
                problemStats[problem.label].total ++;
                problemStats[problem.label].score += problem.score / problem.possible;
            }
        })
    });
    
    const problemAverages: { [key: string]: number } = {};
    Object.keys(problemStats).forEach((label) => {
        const stats = problemStats[label];
        problemAverages[label] = stats.score / stats.total * 100;
    });
    
    return problemAverages;
}

/**
 * @description - This function calculates the percentage of users that have responded to a question
 * @remarks - This function only takes into account the active users
 * @param gradeReport
 * @param totalActive
 */
export function calculateParticipationPercentage(gradeReport: GradeReportData, totalActive: number) {
    const questionStats: { [key: string]: { total: number, scoreCount: number } } = {};
    
    gradeReport.gradeReportLines.forEach(reportLine => {
        reportLine.gradeReportQuestions.forEach(question => {
            if (!questionStats[question.label]) {
                if (question.score > 0) {
                    questionStats[question.label] = { total: 1, scoreCount: 1 };
                } else {
                    questionStats[question.label] = { total: 1, scoreCount: 0 };
                }
            } else {
                questionStats[question.label].total += 1;
                if (question.score > 0) {
                    questionStats[question.label].scoreCount += 1;
                }
            }
        });
    });
    
    const participationPercentages: { [key: string]: number } = {};
    
    Object.keys(questionStats).forEach(questionLabel => {
        const stats = questionStats[questionLabel];
        participationPercentages[questionLabel] = (stats.scoreCount / totalActive) * 100;
    });
    
    return participationPercentages;
}
