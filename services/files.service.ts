import axios from 'axios';

export async function postEnrollments(body: FormData, id: string) {
    const res = await axios.post(`/api/enrollments/${id}`, body, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    
    return res.data;
}