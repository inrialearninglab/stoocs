import axios from 'axios';

export async function fetchEnrollments() {
    const res = await axios.get('/api/enrollments');
    console.log('res', res);
    
    return res.data.enrollments;
}