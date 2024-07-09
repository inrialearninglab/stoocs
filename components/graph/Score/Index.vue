<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';
import FileInputGradeReports from '~/components/fileInput/gradeReports.vue';

const props = defineProps<{
    data: any
    loading: boolean;
}>();

const color = (d: any) => {
    if (d['Moyenne'] < 50) return '#EF4444';
    else if (d['Moyenne'] < 75) return '#F59E0B';
    else return '#10B981';
}

const fileInput: Ref<InstanceType<typeof FileInputGradeReports> | null> = ref(null);
function upload(event: File[]) {
    if (!fileInput.value) return;

    fileInput.value.open = true;
    fileInput.value.files = event;
}

const problems = computed(() => {
    if (!props.data) return [];
    return props.data.filter((d: any) => d['Moyenne'] < 50).sort((a: any, b: any) => a['Moyenne'] - b['Moyenne']);
})

</script>

<template>
    <div class="flex flex-col gap-2">
        <GraphCard
            @upload="upload"
            title="Score"
            description="Pourcentage de réussite moyen par question. Dans ce cas la moyenne ne prend en compte que les apprenants ayant répondu aux questions"
            :loading="loading"
            :empty="!data"
            report="grade"
        >
            <BarChart
                :show-legend="false"
                :percentage="true"
                :rounded-corners="4"
                :data="data"
                index="name"
                :categories="['Moyenne']"
                :color="color"
                :y-formatter="(tick, i) => tick + '%'"
            />

            <GraphScoreIssuesTable v-if="problems.length" :problems="problems" />

        </GraphCard>

        <FileInputGradeReports ref="fileInput" />
    </div>
</template>