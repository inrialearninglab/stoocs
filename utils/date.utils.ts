import { DateFormatter, getLocalTimeZone, parseDate } from '@internationalized/date';

type DateFormat = 'long' | 'short' | 'full' | 'medium';
/**
 * Format date to long french format
 * @param date
 */
export function formatDate(date: Date, format?: DateFormat) {
    const df = new DateFormatter('fr-FR', {
        dateStyle: format ?? 'long',
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
