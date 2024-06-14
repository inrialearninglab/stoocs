import axios from 'axios';
import type { Mooc, Session } from '~/types';

interface SessionData extends Session {
    mooc: Mooc
}
export async function fetchSessionById(id: string): Promise<SessionData> {
    const res = await axios.get(`/api/sessions/${id}`);
    
    if (res.status !== 200) {
        throw new Error(res.data.message);
    }
    
    return res.data.session;
}

export async function fetchGradeReport(id: string) {
    const res = await axios.get(`/api/reports/${id}`);
    
    if (res.status !== 200) {
        throw new Error(res.data.message);
    }
    
    return res.data.report;
}