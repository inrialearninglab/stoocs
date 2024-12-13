<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';
import TooltipPercentage from '~/components/metrics/tooltip/Percentage.vue';
import { ChevronRight, ChevronLeft } from 'lucide-vue-next';
import { Award } from 'lucide-vue-next';

const props = defineProps<{
    data: any;
    loading: boolean;
    cutoffs: number;
}>();

const color = (d: any) => {
    if (d['Moyenne'] < 50) return '#e11d48';
    else if (d['Moyenne'] < 60) return '#f59e0b';
    else return '#12cc82';
};

const problems = computed(() => {
    if (!props.data) return [];
    return props.data.filter((d: any) => d['Moyenne'] < 50);
});

function toggleThreshold() {
    const tresholdLine = document.querySelector('.threshold-line')!;
    if (tresholdLine) {
        tresholdLine.remove();
    } else {
        const scoreChart = document.querySelector('.score-chart')!;
        const vrz4hl = scoreChart.querySelector('svg')!;
        // graph component without the x-axis legend
        const secondAxisComponent = vrz4hl.querySelectorAll('.css-1i6bj7n-axis-component')[1];
        // y-axis legend
        const firstGTag = secondAxisComponent.querySelectorAll('g')[0];

        const vrz4hlRect = vrz4hl.getBoundingClientRect();
        const axisRect = secondAxisComponent.getBoundingClientRect();
        const firstGTagRect = firstGTag.getBoundingClientRect();

        const x1 = axisRect.left + firstGTagRect.width - vrz4hlRect.left;
        const x2 = axisRect.right - vrz4hlRect.left;
        const y = axisRect.top - vrz4hlRect.top + axisRect.height * (1 - props.cutoffs);

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', String(x1));
        line.setAttribute('y1', String(y));
        line.setAttribute('x2', String(x2));
        line.setAttribute('y2', String(y));
        line.setAttribute('stroke', 'red');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('class', 'threshold-line');

        vrz4hl.appendChild(line);
    }
}
</script>

<template>
    <div class="flex flex-col gap-2">
        <MetricsCard title="Score" :loading="loading" :empty="!data" report="grade">
            <template #description>
                Note moyenne en pourcentage par question. Dans ce cas la moyenne ne prend en compte que les apprenants
                ayant répondu aux questions.
            </template>

            <template #actions>
                <div class="flex gap-5 items-center">
                    <Button @click="toggleThreshold">
                        <Award class="mr-2" />
                        Afficher le seuil de réussite
                    </Button>

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
                </div>
            </template>

            <BarChart
                class="score-chart"
                :show-legend="false"
                :percentage="true"
                :rounded-corners="4"
                :data="data"
                index="name"
                :categories="['Moyenne']"
                :color="color"
                :y-formatter="(tick, i) => tick + '%'"
                :custom-tooltip="TooltipPercentage"
                :show-x-tickline="true"
            />

            <MetricsChartsScoreIssuesTable v-if="problems.length" :problems="problems" />
        </MetricsCard>
    </div>
</template>
