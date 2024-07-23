import axios from 'axios';
import type { Mooc } from '~/types';

export async function fetchMoocs(): Promise<Mooc[]> {
    const res = await axios.get('/api/moocs');
    
    if (res.status !== 200) {
        throw new Error(res.data.message);
    }
    
    return res.data.moocs
}

export async function pinMooc(moocId: string, pinned: boolean): Promise<Partial<Mooc> | null> {
    try {
        let res;
        if (!pinned) res = await axios.post('/api/moocs/pin', { moocId });
        else res = await axios.delete('/api/moocs/pin', { data: { moocId } });
        
        return res.data.mooc;
    } catch (e) {
        console.error(e);
        return null;
    }
}