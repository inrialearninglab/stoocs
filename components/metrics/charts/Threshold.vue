<script setup lang="ts">
import { saveChartAsPNG } from '~/utils';
import { Camera } from 'lucide-vue-next';

defineProps<{
    data: {
        threshold: string;
        Eligible: number;
    }[];
    loading: boolean;
    cutoffs: number;
}>();

const chartId = 'threshold-chart';

const sessionStore = useSession();
const title = "Nombre d'inscrits éligibles au badge";
const description: Ref<HTMLDivElement | null> = ref(null);
</script>

<template>
    <div class="flex flex-col gap-2">
        <MetricsCard :title="title" :loading="loading" :empty="!data" report="grade">
            <template #description>
                <div ref="description">
                    Nombre d'inscrits éligibles selon le seuil de réussite. Le seuil actuel est de
                    <strong class="text-primary">{{ cutoffs * 100 }}%</strong>, ce qui représente
                    <strong class="text-primary"
                        >{{ data.find((d: any) => d.threshold === cutoffs * 100 + '%')?.Eligible }} inscrits</strong
                    >.
                </div>
            </template>

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
                            description!.innerHTML,
                        )
                    "
                >
                    <Camera />
                </Button>
            </template>

            <AreaChart
                :show-legend="false"
                :data="data"
                index="threshold"
                y-label="Inscrits éligibles"
                x-label="Seuil de note"
                :categories="['Eligible']"
                :id="chartId"
            />
        </MetricsCard>
    </div>
</template>
