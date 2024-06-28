<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';

defineProps<{
    data: any;
    loading: boolean;
}>();

</script>

<template>
    <GraphCard
        title="Participation"
        description="Pour chaque séquence, pourcentage d'utilisateurs actifs ayant répondu à au moins une question"
        :loading="loading"
        :empty="!data"
    >
        <BarChart
            :rounded-corners="4"
            :data="data"
            index="name"
            :categories="['Participation']"
            :y-formatter="(value) => `${value}%`"
        />
    </GraphCard>
</template>