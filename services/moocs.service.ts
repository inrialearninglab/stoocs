import axios from 'axios';
import type { Mooc } from '~/types';

export async function fetchMoocs(): Promise<Mooc[]> {
    const res = await axios.get('/api/moocs');
    
    if (res.status !== 200) {
        throw new Error(res.data.message);
    }
    
    console.log(res.data.moocs)
    
    return res.data.moocs
}