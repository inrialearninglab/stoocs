import type { GradeReportLine } from '~/types';

export function isUserActive(reportLine: GradeReportLine) {
    return reportLine.gradeReportProblems.some((item) => item.possible);
}

export function isUserCurious(reportLine: GradeReportLine) {
    return reportLine.gradeReportProblems.some((item) => item.possible !== undefined);
}
