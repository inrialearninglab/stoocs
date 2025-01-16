interface MetaData {
    courseNumber: string;
    sessionName: string;
    date: string;
}

/**
 * Extracts the metadata from the filename.
 * @param filename - The filename to extract the metadata from.
 * @returns {MetaData} - The metadata extracted from the filename.
 * @returns {null} - if the metadata could not be extracted.
 */
export function extractMetadata(filename: string): MetaData | null {
    const params = filename.split('_');
    const courseNumber = params[1];
    const sessionName = params[2];
    const dateTime = params.pop();

    if (!dateTime) return null;

    const parts = dateTime.split('-');
    const date = parts.slice(0, 3).join('-');

    if (!date || !courseNumber || !sessionName) return null;

    return {
        courseNumber,
        sessionName,
        date,
    };
}

export function getFormattedSize(size: number) {
    const units = ['o', 'Ko', 'Mo', 'Go', 'To'];
    let unitIndex = 0;
    while (size > 1024) {
        size /= 1024;
        unitIndex++;
    }
    return `${size.toFixed(2)} ${units[unitIndex]}`;
}

const gradeReportRegex = /^[\w-]+_\d+_[\w-]+_grade_report_\d{4}-\d{2}-\d{2}-\d{4}(?:.*)?\.csv$/;
const problemGradeReportRegex = /^[\w-]+_\d+_[\w-]+_problem_grade_report_\d{4}-\d{2}-\d{2}-\d{4}(?:.*)?\.csv$/;
const enrollmentsRegex = /^enrollments(?:.*)?\.csv$/;

export function isGradeReport(filename: string) {
    return gradeReportRegex.test(filename) && !problemGradeReportRegex.test(filename);
}

export function isProblemGradeReport(filename: string) {
    return problemGradeReportRegex.test(filename);
}

export function isEnrollments(filename: string) {
    return enrollmentsRegex.test(filename);
}
