import type { Mooc } from '~/types';
import { fetchMoocs, pinMooc } from '~/services/moocs.service';
import { toast } from 'vue-sonner';

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
            const pinnedMoocs = this.filteredMoocs.filter(mooc => {
                const user = useUser();

                return mooc.pinnedBy.some(pinnedBy => pinnedBy.userId === user.value?.id)
            });

            return pinnedMoocs.sort((a, b) => a.title > b.title ? 1 : -1);
        },

        unpinnedMoocs(): Mooc[] {
            const unpinnedMoocs = this.filteredMoocs.filter(mooc => {
                const user = useUser();

                return !mooc.pinnedBy.some(pinnedBy => pinnedBy.userId === user.value?.id);
            });

            return unpinnedMoocs.sort((a, b) => a.title > b.title ? 1 : -1);
        },
    },

    actions: {
        async fetchMoocs() {
            const { data, error } = await fetchMoocs();
            if (!error && data) this.moocs = data;
        },

        async pin(moocId: string, pinned: boolean) {
            const { data, error } = await pinMooc(moocId, pinned);

            if (error) {
                toast.error('Erreur lors de l\'épinglage du MOOC');
            } else if (data) {
                const mooc = this.moocs.find(mooc => mooc.id === moocId);
                if (mooc) mooc.pinnedBy = data.pinnedBy ?? [];

                if (!pinned) toast.info('MOOC ajouté aux favoris');
                else toast.warning('MOOC retiré des favoris');
            }
        },

        reset() {
            this.moocs = [];
            this.search = '';
        }
    }
})
