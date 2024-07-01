<script setup lang="ts">
import { LineChart } from '~/components/ui/chart-line';
import FileInputGradeReports from '~/components/FileInput/gradeReports.vue';
import { BarChart } from '~/components/ui/chart-bar';

const props = defineProps<{
    data: {
        threshold: string;
        'Eligible': number
    }[];
    loading: boolean;
}>();

const fileInput: Ref<InstanceType<typeof FileInputGradeReports> | null> = ref(null);
function upload(event: File[]) {
    if (!fileInput.value) return;

    fileInput.value.open = true;
    fileInput.value.files = event;
}

</script>

<template>
    <div class="flex flex-col gap-2">
        <GraphCard
            @upload="upload"
            title="Nombre d'éligibles"
            description="Nombre d'utilisateurs éligibles par seuil de note"
            :loading="loading"
            :empty="!data"
        >
            <LineChart
                :data="data"
                index="threshold"
                :categories="['Eligible']"
            />
        </GraphCard>

        <FileInputGradeReports ref="fileInput" />
    </div>
</template>