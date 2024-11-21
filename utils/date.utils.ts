import { DateFormatter, getLocalTimeZone, parseDate } from '@internationalized/date';

/**
 * Format date to long french format
 * @param date
 */
export function formatDate(date: Date) {
    const df = new DateFormatter('fr-FR', {
        dateStyle: 'long',
    });

    return df.format(date);
}

/**
 * Parse date string to Date object
 * @param date - date to format (format: yyyy-mm-dd)
 */
export function getParsedDate(date: string) {
    return parseDate(date).toDate(getLocalTimeZone());
}
