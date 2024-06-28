<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';
import FileInputGradeReports from '~/components/FileInput/gradeReports.vue';

defineProps<{
    data: any;
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
            title="Participation"
            description="Pour chaque séquence, pourcentage d'utilisateurs actifs ayant répondu à au moins une question"
            :loading="loading"
            :empty="!data"
        >
            <BarChart
                :rounded-corners="4"
                :data="data"
                index="name"
                :categories="['Participation']"
                :y-formatter="(value) => `${value}%`"
            />
        </GraphCard>

        <FileInputGradeReports ref="fileInput" />
    </div>
</template>