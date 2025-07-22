<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';
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
            label: String(item.year),
            value: item.value,
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
const title = 'Engagement';
const description = "Pour chaque séquence, pourcentage d'apprenants actifs ayant répondu";
</script>

<template>
    <div class="flex flex-col gap-2">
        <MetricsCard :title="title" :description="description" :loading="loading" :empty="!data" report="grade">
            <template #description> {{ description }} </template>

            <template #legend>
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
            </template>

            <template #toolbar>
                <Toggle
                    variant="outline"
                    aria-label="Afficher le nombre d'apprenants"
                    v-model:pressed="displayLabels"
                    class="border-2 border-dashed"
                >
                    <img src="/chart-legend.svg" class="h-10 mr-2" />
                    {{ displayLabels ? 'Cacher le' : 'Afficher le' }} le nombre d'apprenants
                </Toggle>
            </template>

            <BarChart
                :show-legend="false"
                :rounded-corners="4"
                :data="data"
                index="year"
                :categories="['value']"
                :labels="labels"
                :id="chartId"
                :show-x-tickline="true"
            />
        </MetricsCard>
    </div>
</template>
