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
        },

        pinnedMoocs(): Mooc[] {
            return this.filteredMoocs.filter(mooc => {
                const user = useUser();

                return mooc.pinnedBy.some(pinnedBy => pinnedBy.userId === user.value?.id);
            });
        },

        unpinnedMoocs(): Mooc[] {
            return this.filteredMoocs.filter(mooc => {
                const user = useUser();

                return !mooc.pinnedBy.some(pinnedBy => pinnedBy.userId === user.value?.id);
            });
        },
    },

    actions: {
        async fetchMoocs() {
            const { data, error } = await fetchMoocs();
            if (!error && data) this.moocs = data;
        },

        reset() {
            this.moocs = [];
            this.search = '';
        }
    }
})
