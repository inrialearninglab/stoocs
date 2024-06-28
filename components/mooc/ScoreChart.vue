<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';

defineProps<{
    data: any
    loading: boolean;
}>();

const color = (d: any) => {
    if (d['Moyenne'] < 50) return '#EF4444';
    else if (d['Moyenne'] < 75) return '#F59E0B';
    else return '#10B981';
}
</script>

<template>
    <GraphCard
        title="Score"
        description="Pourcentage de réussite moyen par question.Dans ce cas la moyenne ne prends en compte que les gens ayant répondu aux questions"
        :loading="loading"
        :empty="!data"
    >
        <BarChart
            :rounded-corners="4"
            :data="data"
            index="name"
            :categories="['Moyenne']"
            :color="color"
            :y-formatter="(tick, i) => tick + '%'"
        />
    </GraphCard>
</template>