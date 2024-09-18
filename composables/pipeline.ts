import type { Status } from '~/types/ci.type';
import { useMoocs } from '~/stores/moocs.store';
import { toast } from 'vue-sonner';

export const usePipeline = () => {
    const status = useState<Status | undefined>(`pipeline-status`, () => undefined)
    let intervalId: NodeJS.Timeout | undefined;
    const loading = useState<boolean>(`pipeline-loading`, () => false);

    const fetchStatus = async (id: string) => {
        const res = await $fetch<{ status: Status }>(`/api/ci/${id}`);
        status.value = res.status;
    }

    const checkStatus = async (id: string) => {
        await fetchStatus(id);
        loading.value = true;

        intervalId = setInterval(async () => {
            await fetchStatus(id);

            if (status.value && ['failed', 'canceled', 'success'].includes(status.value)) {
                await stopInterval();
            }
        }, 10000);
    }

    const stopInterval = async () => {
        const moocsStore = useMoocs();

        if (intervalId) clearInterval(intervalId);
        intervalId = undefined;

        loading.value = false;

        if (status.value === 'failed') toast.error('Erreur lors de la mise à jour des données');
        else if (status.value === 'canceled') toast.warning('Annulation de la mise à jour des données');
        else {
            toast.success('Données mises à jour avec succès');
            await moocsStore.fetchMoocs();
        }
    }

    return {
        status,
        loading,
        checkStatus
    }
}
