import type { User } from 'lucia';
import axios from 'axios';

export async function getUsers(): Promise<User[] | null> {
    try {
        const res = await axios.get('/api/users');
        
        return res.data;
    } catch {
        return null;
    }
}

export async function deleteUser(id: string): Promise<User | null> {
    try {
        const res = await axios.delete(`/api/users/${id}`);
        
        return res.data.user;
    } catch {
        return null;
    }
}

export async function updateProfile(email: string, firstname: string, lastname: string): Promise<User | null> {
    try {
        const res = await axios.put('/api/users/profile', { email, firstname, lastname });
        
        return res.data.user;
    } catch {
        return null;
    }
}