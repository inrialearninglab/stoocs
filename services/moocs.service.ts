import type { Mooc } from '~/types';
import { FetchError } from 'ofetch';

export async function fetchMoocs(): Promise<{ data?: Mooc[], error?: FetchError }> {
    try {
        const data = await $fetch<Mooc[]>('/api/moocs');
        
        return { data }
    } catch (e) {
        return { error: e as FetchError }
    }
}

export async function pinMooc(moocId: string, pinned: boolean): Promise<{ data?: Partial<Mooc>, error?: FetchError }> {
    try {
        const data = await $fetch<Partial<Mooc>>('/api/moocs/pin', {
            method: pinned ? 'DELETE' : 'POST',
            body: { moocId }
        })
        
        return { data }
    } catch (e) {
        return { error: e as FetchError }
    }
}