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

const colors = (d: any) => {
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

const displayThreshold = ref(false);

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
                        v-model="displayThreshold"
                        class="border-2 border-dashed"
                    >
                        <Award class="mr-2" />
                        {{ displayThreshold ? 'Cacher le' : 'Afficher le' }} seuil de réussite
                    </Toggle>
                    <Toggle
                        variant="outline"
                        aria-label="Display questions at 0"
                        v-model="displayZero"
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
                :colors="colors"
                :y-formatter="(tick, i) => tick + '%'"
                :custom-tooltip="TooltipPercentage"
                :show-x-tickline="true"
                :id="chartId"
                :plotline="displayThreshold ? cutoffs * 100 : undefined"
            />

            <MetricsChartsScoreList :questions="data" />
        </MetricsCard>
    </div>
</template>
