<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';

defineProps<{
    data: any;
    loading: boolean;
}>();

</script>

<template>
    <div class="flex flex-col gap-2">
        <GraphCard
            title="Participation"
            description="Pour chaque séquence, pourcentage d'utilisateurs actifs ayant répondu"
            :loading="loading"
            :empty="!data"
            report="grade"
        >
            <BarChart
                :percentage="true"
                :show-legend="false"
                :rounded-corners="4"
                :data="data"
                index="name"
                :categories="['Participation']"
                :y-formatter="(value) => `${value}%`"
            />
        </GraphCard>
    </div>
</template>