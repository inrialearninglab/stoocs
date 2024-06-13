import type { ReportLine } from '~/types';

export function isUserActive(reportLine: ReportLine) {
    return reportLine.problemGradeReport.some(item => item.possible);
}

export function isUserCurious(reportLine: ReportLine) {
    if (reportLine.problemGradeReport) {
        return reportLine.problemGradeReport.some(item => item.possible !== undefined);
    }
}