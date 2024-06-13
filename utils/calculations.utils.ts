import type { GradeReport } from '~/types';

/**
 * @description - This function calculates a score by user for each problem before calculating the average
 * @remarks
 * This function only takes into account the users that have responded to the problem.
 * For a given problem each user can have a different possible so we to calculate a percentage per question for each user.
 * @param gradeReport
 */
export function calculateProblemAverage(gradeReport: GradeReport) {
    const problemStats:{ [key: string]: { total: number, score: number }} = {};
    
    gradeReport.report.forEach((reportLine) =>  {
        reportLine.problemGradeReport.forEach((problem) => {
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
 */
export function calculateParticipationPercentage(gradeReport: GradeReport) {
    const questionStats: { [key: string]: { total: number, scoreCount: number } } = {};
    
    let activeUsers = 0;
    gradeReport.report.forEach(reportLine => {
        let isActive = false;
        reportLine.questions.forEach(question => {
            if (!questionStats[question.label]) {
                if (question.score > 0) {
                    questionStats[question.label] = { total: 1, scoreCount: 1 };
                    isActive = true;
                } else {
                    questionStats[question.label] = { total: 1, scoreCount: 0 };
                }
            } else {
                questionStats[question.label].total += 1;
                if (question.score > 0) {
                    questionStats[question.label].scoreCount += 1;
                    isActive = true;
                }
            }
        });
        if (isActive) activeUsers ++;
    });
    
    const participationPercentages: { [key: string]: number } = {};
    
    Object.keys(questionStats).forEach(questionLabel => {
        const stats = questionStats[questionLabel];
        participationPercentages[questionLabel] = (stats.scoreCount / activeUsers) * 100;
    });
    
    return participationPercentages;
}
