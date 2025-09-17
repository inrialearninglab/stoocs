import { getLocalTimeZone, parseDate } from '@internationalized/date';

/**
 * Format date to long french format
 * @param date
 */
export function formatDate(date: Date): string {
    const formattedDate = date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
    });

    return formattedDate;
}

/**
 * Parse date string to Date object
 * @param date - date to format (format: yyyy-mm-dd)
 */
export function getParsedDate(date: string): Date {
    return parseDate(date).toDate(getLocalTimeZone());
}
