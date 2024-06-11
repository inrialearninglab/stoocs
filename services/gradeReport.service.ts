import axios from 'axios';

export async function fetchGradeReport() {
    const res = await axios.get('/api/report');
    console.log('res', res);
    
    return res.data.gradeReport;
}