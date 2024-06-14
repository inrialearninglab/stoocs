import type { Mooc } from '~/types';
import { fetchMoocs } from '~/services/moocs.service';

interface MoocsState {
    moocs: Mooc[];
}

export const useMoocs = defineStore('moocs', {
    state: (): MoocsState => ({
        moocs: []
    }),
    
    actions: {
        async getMoocs() {
            this.moocs = await fetchMoocs();
        }
    }
})