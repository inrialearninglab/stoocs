<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';
import TooltipPercentage from '~/components/graph/tooltip/Percentage.vue';
import { ChevronRight, ChevronLeft, Minus } from 'lucide-vue-next'

const props = defineProps<{
    data: any
    loading: boolean;
}>();

const color = (d: any) => {
    if (d['Moyenne'] < 50) return '#ff3b30';
    else if (d['Moyenne'] < 60) return '#f59e0b';
    else return '#12cc82';
}

const problems = computed(() => {
    if (!props.data) return [];
    return props.data.filter((d: any) => d['Moyenne'] < 50)
})

</script>

<template>
    <div class="flex flex-col gap-2">
        <GraphCard
            title="Score"
            :loading="loading"
            :empty="!data"
            report="grade"
        >
            <template #description>
                Note moyenne en pourcentage par question. Dans ce cas la moyenne ne prend en compte que les apprenants ayant répondu aux questions.
            </template>

            <template #actions>
                <div class="flex flex-col gap-2 text-sm mt-2 text-muted-foreground">
                    <div class="flex gap-1 items-center">
                        <div class="size-4 rounded-full bg-success" />
                        <span class="flex items-center"><ChevronRight class="size-4" /> 60%</span>
                    </div>
                    <div class="flex gap-1 items-center">
                        <div class="size-4 rounded-full bg-warning" />
                        <span class="flex items-center ml-2">50% à 60%</span>
                    </div>
                    <div class="flex gap-1 items-center">
                        <div class="size-4 rounded-full bg-error" />
                        <span class="flex items-center"><ChevronLeft class="size-4" /> 50%</span>
                    </div>
                </div>
            </template>

            <BarChart
                :show-legend="false"
                :percentage="true"
                :rounded-corners="4"
                :data="data"
                index="name"
                :categories="['Moyenne']"
                :color="color"
                :y-formatter="(tick, i) => tick + '%'"
                :custom-tooltip="TooltipPercentage"
            />

            <GraphScoreIssuesTable v-if="problems.length" :problems="problems" />

        </GraphCard>
    </div>
</template>
