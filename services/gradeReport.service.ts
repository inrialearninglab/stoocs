import axios from 'axios';

export async function fetchGradeReport() {
    const res = await axios.get('/api/report');
    
    return res.data.gradeReport;
}