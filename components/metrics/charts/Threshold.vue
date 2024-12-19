<script setup lang="ts">
import { saveChartAsPNG } from '~/utils';
import { Camera } from 'lucide-vue-next';

const props = defineProps<{
    data: {
        threshold: string;
        Eligible: number;
    }[];
    loading: boolean;
    cutoffs: number;
}>();

const chartId = 'threshold-chart';

const sessionStore = useSession();
</script>

<template>
    <div class="flex flex-col gap-2">
        <MetricsCard title="Nombre d'apprenants éligibles au badge" :loading="loading" :empty="!data" report="grade">
            <template #description>
                Nombre d'apprenants éligibles selon le seuil de réussite. Le seuil actuel est de
                <strong class="text-primary">{{ cutoffs * 100 }}%</strong>, ce qui représente
                <strong class="text-primary"
                    >{{ data.find((d: any) => d.threshold === cutoffs * 100 + '%')?.Eligible }} apprenants</strong
                >.
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
                y-label="Apprenants éligibles"
                x-label="Seuil de note"
                :categories="['Eligible']"
                :id="chartId"
            />
        </MetricsCard>
    </div>
</template>
