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
            Eligible: eligible.length,
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
            Participation: Number((participation[question.label].percentage ?? 0).toFixed(2)),
            Utilisateurs: participation[question.label].users,
        });
    }

    // Remove the Average because i don't really understand how to use it
    data = data.filter((item) => !item.name.endsWith('Avg'));

    // Sorting by name because there is some strange choice of order in the default data
    return data.sort((a, b) => sortByName(a.name, b.name));
}

export function getScoreData(gradeReport: GradeReportData): GradeReport['score'] {
    let data = [];

    const firstLine = gradeReport.gradeReportLines[0];
    const problems = firstLine.gradeReportProblems;

    const problemAverages = calculateProblemAverage(gradeReport);
    for (const problem of problems) {
        data.push({
            name: problem.label,
            Moyenne: Number((problemAverages[problem.label]?.average ?? 0).toFixed(2)),
            Utilisateurs: problemAverages[problem.label]?.users,
        });
    }

    return data.sort((a, b) => sortByModuleName(a.name, b.name));
}

/**
 * @description - This function calculates a score by user for each problem before calculating the average
 * @remarks
 * This function only takes into account the users that have responded to the problem.
 * For a given problem each user can have a different possible so we to calculate a percentage per question for each user.
 * @param gradeReport
 */
export function calculateProblemAverage(gradeReport: GradeReportData) {
    const problemStats: { [key: string]: { total: number; score: number } } = {};

    gradeReport.gradeReportLines.forEach((reportLine) => {
        reportLine.gradeReportProblems.forEach((problem) => {
            if (!problemStats[problem.label]) {
                if (problem.possible && problem.possible > 0) {
                    if (!problem.score) problem.score = 0;
                    problemStats[problem.label] = { total: 1, score: problem.score / problem.possible };
                }
            } else if (problem.possible && problem.possible > 0) {
                if (!problem.score) problem.score = 0;

                problemStats[problem.label].total++;
                problemStats[problem.label].score += problem.score / problem.possible;
            }
        });
    });

    const problemAverages: { [key: string]: { average: number; users: number } } = {};
    Object.keys(problemStats).forEach((label) => {
        const stats = problemStats[label];
        problemAverages[label] = {
            average: (stats.score / stats.total) * 100,
            users: stats.total,
        };
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
    const questionStats: { [key: string]: { total: number; scoreCount: number } } = {};

    gradeReport.gradeReportLines.forEach((reportLine) => {
        reportLine.gradeReportQuestions.forEach((question) => {
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

    const participationPercentages: { [key: string]: { percentage: number; users: number } } = {};

    Object.keys(questionStats).forEach((questionLabel) => {
        const stats = questionStats[questionLabel];
        participationPercentages[questionLabel] = {
            percentage: (stats.scoreCount / totalActive) * 100,
            users: stats.scoreCount,
        };
    });

    return participationPercentages;
}

/**
 * @description - This function sorts the question by name
 * @param a
 * @param b
 */
function sortByName(a: string, b: string): number {
    return a.trim().localeCompare(b.trim(), undefined, { numeric: true, sensitivity: 'base' });
}

/**
 * @description - This question sorts the questions by the name of their module only
 * @remark - Used because FUN cannot correctly sort their module, but can sort the questions inside (which we cannot do from the name)
 * @param a
 * @param b
 * @returns
 */
function sortByModuleName(a: string, b: string): number {
    const moduleNameA = a.split(':')[0];
    const moduleNameB = b.split(':')[0];
    return sortByName(moduleNameA, moduleNameB);
}
