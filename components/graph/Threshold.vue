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
            title="Nombre d'apprenants éligibles au badge"
            :loading="loading"
            :empty="!data"
            report="grade"
        >
            <template #description>
                Nombre d'apprenants éligibles selon le seuil de réussite. Le seuil actuel est de <strong>{{ cutoffs * 100 }}%</strong>,
                ce qui représente <strong>{{ data.find((d: any) => d.threshold === cutoffs * 100 + "%")?.Eligible }} apprenants</strong>.
            </template>

            <AreaChart
                :show-legend="false"
                :data="data"
                index="threshold"
                y-label="Apprenants éligibles"
                x-label="Seuil de note"
                :categories="['Eligible']"
            />
        </GraphCard>
    </div>
</template>