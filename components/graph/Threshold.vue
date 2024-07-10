<script setup lang="ts">
import { LineChart } from '~/components/ui/chart-line';

const props = defineProps<{
    data: {
        threshold: string;
        'Eligible': number
    }[];
    loading: boolean;
}>();

</script>

<template>
    <div class="flex flex-col gap-2">
        <GraphCard
            title="Nombre d'éligibles"
            description="Nombre d'utilisateurs éligibles par seuil de note"
            :loading="loading"
            :empty="!data"
            report="grade"
        >
            <LineChart
                :show-legend="false"
                :data="data"
                index="threshold"
                :categories="['Eligible']"
            />
        </GraphCard>

<!--        <FileInputGradeReports ref="fileInput" />-->
    </div>
</template>