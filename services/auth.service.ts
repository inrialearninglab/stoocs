import axios from 'axios';

export async function register(email: string, firstname: string, lastname: string, password: string) {
    const res = await axios.post('/api/auth/register', { email, firstname, lastname, password });
    
    return res.data.user;
}

export async function login(email: string, password: string): Promise<boolean> {
    try {
        await axios.post('/api/auth/login', { email, password });
        return true;
    } catch {
        return false;
    }
}

export async function logout() {
    await axios.post('/api/auth/logout');
}