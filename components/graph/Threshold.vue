<script setup lang="ts">
import { LineChart } from '~/components/ui/chart-line';

const props = defineProps<{
    data: {
        threshold: string;
        'Eligible': number
    }[];
    loading: boolean;
    cutoffs: number;
}>();

</script>

<template>
    <div class="flex flex-col gap-2">
        <GraphCard
            title="Nombre d'éligibles"
            :description="`Nombre d'utilisateurs éligibles par seuil de note. Le seuil actuel est de ${cutoffs * 100}%.`"
            :loading="loading"
            :empty="!data"
            report="grade"
        >
            <AreaChart
                :show-legend="false"
                :data="data"
                index="threshold"
                y-label="Nombres d'éligibles"
                x-label="Seuil de note"
                :categories="['Eligible']"
            />
        </GraphCard>
    </div>
</template>