import type { Mooc } from '~/types';
import { fetchMoocs } from '~/services/moocs.service';

interface MoocsState {
    moocs: Mooc[];
    search: string;
}

export const useMoocs = defineStore('moocs', {
    state: (): MoocsState => ({
        moocs: [],
        search: ''
    }),
    
    getters: {
        filteredMoocs(): Mooc[] {
            return this.moocs.filter(mooc => mooc.title.toLowerCase().includes(this.search.toLowerCase()));
        }
    },
    
    actions: {
        async getMoocs() {
            this.moocs = await fetchMoocs();
        }
    }
})