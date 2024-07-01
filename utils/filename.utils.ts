interface MetaData {
    courseNumber: string
    sessionName: string
    date: string
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
    const date = parts.slice(0, 3).join('-')
    
    if (!date || !courseNumber || !sessionName) return null;
    
    return {
        courseNumber,
        sessionName,
        date
    }
}