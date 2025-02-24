<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';
import TooltipPercentage from '~/components/metrics/tooltip/Percentage.vue';
import { ChevronRight, ChevronLeft, Award } from 'lucide-vue-next';
import { saveChartAsPNG } from '~/utils';
import { Camera } from 'lucide-vue-next';

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

const displayZero = ref(false);
const filteredData = computed(() => {
    if (!displayZero.value) {
        return props.data.filter((d: any) => d['Moyenne'] > 0);
    } else {
        return props.data;
    }
});
watch(displayZero, () => {
    displayThreshold.value = false;
});

const problems = computed(() => {
    if (!filteredData.value) return [];
    return filteredData.value.filter((d: any) => d['Moyenne'] < 50);
});

const displayThreshold = ref(false);
function updateThresholdLine(shouldDisplay: boolean) {
    const tresholdLine = document.querySelector('.threshold-line');
    if (shouldDisplay) {
        if (!tresholdLine) {
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
    } else {
        if (tresholdLine) {
            tresholdLine.remove();
        }
    }
}

watch(displayThreshold, (newValue) => {
    updateThresholdLine(newValue);
});

function handleResize() {
    displayThreshold.value = false;
}

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

const chartId = 'score-chart';

const sessionStore = useSession();
const title = 'Score';
const description = `Note moyenne en pourcentage par question. Dans ce cas la moyenne ne prend en compte que les apprenants ayant répondu aux questions.`;
</script>

<template>
    <div class="flex flex-col gap-2">
        <MetricsCard :title="title" :loading="loading" :empty="!data" report="grade">
            <template #description>
                {{ description }}
            </template>

            <template #legend>
                <div class="flex gap-5">
                    <div :id="`${chartId}-legend`" class="flex flex-col gap-2 text-sm mt-2 text-muted-foreground">
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

                    <Button
                        size="icon"
                        @click="
                            saveChartAsPNG(
                                chartId,
                                sessionStore.session!.data!.mooc.title,
                                sessionStore.session!.data!.sessionName,
                                sessionStore.gradeReportDate!,
                                title,
                                description,
                            )
                        "
                    >
                        <Camera />
                    </Button>
                </div>
            </template>

            <template #toolbar>
                <div class="flex gap-2 text-end items-end justify-end mt-4">
                    <Toggle
                        variant="outline"
                        aria-label="Afficher le seuil de réussite"
                        v-model:pressed="displayThreshold"
                        class="border-2 border-dashed"
                    >
                        <Award class="mr-2" />
                        {{ displayThreshold ? 'Cacher le' : 'Afficher le' }} seuil de réussite
                    </Toggle>
                    <Toggle
                        variant="outline"
                        aria-label="Display questions at 0"
                        v-model:pressed="displayZero"
                        class="border-2 border-dashed"
                    >
                        {{ displayZero ? 'Cacher les' : 'Afficher les' }} Question à 0
                    </Toggle>
                </div>
            </template>

            <BarChart
                class="score-chart"
                :show-legend="false"
                :percentage="true"
                :rounded-corners="4"
                :data="filteredData"
                index="name"
                :categories="['Moyenne']"
                :color="color"
                :y-formatter="(tick, i) => tick + '%'"
                :custom-tooltip="TooltipPercentage"
                :show-x-tickline="true"
                :id="chartId"
            />

            <MetricsChartsScoreIssuesTable v-if="problems.length" :problems="problems" />
        </MetricsCard>
    </div>
</template>
