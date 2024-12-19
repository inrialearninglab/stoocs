<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';
import TooltipPercentage from '~/components/metrics/tooltip/Percentage.vue';
import type { Labels } from '~/types/graph.type';
import { saveChartAsPNG } from '~/utils';
import { Camera } from 'lucide-vue-next';

const props = defineProps<{
    data: any;
    loading: boolean;
}>();

const displayLabels = ref(false);
const labels: Ref<Labels | undefined> = ref(undefined);

function initLabels() {
    labels.value = {};
    for (const [index, item] of props.data.entries()) {
        // for the labels to works, we must set a pos property to each item
        item.pos = index;

        labels.value[index] = {
            label: String(item.Utilisateurs),
            value: item.Participation,
            pos: index,
        };
    }
}

watch(displayLabels, (newValue) => {
    handleLabels(newValue);
});

function handleLabels(shouldDisplay: boolean) {
    if (shouldDisplay) {
        initLabels();
    } else {
        labels.value = undefined;
    }
}

const chartId = 'interest-chart';

const sessionStore = useSession();
</script>

<template>
    <div class="flex flex-col gap-2">
        <MetricsCard title="Engagement" description="" :loading="loading" :empty="!data" report="grade">
            <template #description> Pour chaque séquence, pourcentage d'apprenants actifs ayant répondu </template>

            <template #legend>
                <Button
                    size="icon"
                    @click="
                        saveChartAsPNG(
                            chartId,
                            sessionStore.session!.data!.mooc.title,
                            sessionStore.session!.data!.sessionName,
                            sessionStore.gradeReportDate!,
                        )
                    "
                >
                    <Camera />
                </Button>
            </template>

            <template #toolbar>
                <Toggle variant="outline" aria-label="Afficher le nombre d'apprenants" v-model:pressed="displayLabels">
                    <img src="/chart-legend.svg" class="h-10 mr-2" />
                    Nombre d'apprenants
                </Toggle>
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
                :id="chartId"
                :show-x-tickline="true"
            />
        </MetricsCard>
    </div>
</template>
