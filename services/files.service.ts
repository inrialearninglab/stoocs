import axios from 'axios';

/**
 * Uploads an enrollments report to a session
 * @param body
 * @param id
 * @returns - The updated session
 * @throws - An error if the request fails
 *
 */
export async function postEnrollments(body: FormData, id: string) {
    try {
        const res = await axios.post(`/api/enrollments/${id}`, body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return res.data.session;
    } catch {
        return null;
    }
}