<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';
import TooltipPercentage from '~/components/metrics/tooltip/Percentage.vue';
import type { Labels } from '~/types/graph.type';

const props = defineProps<{
    data: any;
    loading: boolean;
}>();

const labels: Ref<Labels | undefined> = ref(undefined)

function initLabels() {
    labels.value = {}
    for (const [index, item] of props.data.entries()) {
        // for the labels to works, we must set a pos property to each item
        item.pos = index

        labels.value[index] = {
            label: String(item.Utilisateurs),
            value: item.Participation,
            pos: index
        }
    }
}

function handleLabels() {
    if (!labels.value) {
        initLabels();
    } else {
        labels.value = undefined;
    }
}

</script>

<template>
    <div class="flex flex-col gap-2">
        <MetricsCard
            title="Engagement"
            description=""
            :loading="loading"
            :empty="!data"
            report="grade"
        >
            <template #description>
               Pour chaque séquence, pourcentage d'apprenants actifs ayant répondu
            </template>

            <template #actions>
                <MetricsHideLabels :visible="!!labels" @click="handleLabels" />
            </template>

            <BarChart
                :percentage="true"
                :show-legend="false"
                :rounded-corners="4"
                :data="data"
                index="name"
                :categories="['Participation']"
                :y-formatter="(value) => `${value}%`"
                :custom-tooltip="TooltipPercentage"
                :labels="labels"
            />
        </MetricsCard>
    </div>
</template>
