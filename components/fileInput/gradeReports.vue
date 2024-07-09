<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';
import { useSession } from '~/stores/session.store';

const files: Ref<File[]> = ref([]);
const sessionStore = useSession();

const gradeReportRegex = /^[\w-]+_\d+_[\w-]+_grade_report_\d{4}-\d{2}-\d{2}-\d{4}\.csv$/;
const problemGradeReportRegex = /^[\w-]+_\d+_[\w-]+_problem_grade_report_\d{4}-\d{2}-\d{2}-\d{4}\.csv$/;

const loading = ref(false);
const open = ref(false);

const conditions = computed(() => {
    return {
        'Grade report': files.value.some(file => gradeReportRegex.test(file.name) && !problemGradeReportRegex.test(file.name)),
        'Problem grade report': files.value.some(file => problemGradeReportRegex.test(file.name)),
    }
})

const conditionsFilled = computed(() => {
    return Object.values(conditions.value).every(condition => condition);
})

async function handleSubmit() {
    loading.value = true;
    const gradeReport = files.value.find(file => gradeReportRegex.test(file.name) && !problemGradeReportRegex.test(file.name));
    const problemGradeReport = files.value.find(file => problemGradeReportRegex.test(file.name));

    if (!gradeReport || !problemGradeReport) return;

    const body = new FormData();

    body.append('gradeReport', gradeReport);
    body.append('problemGradeReport', problemGradeReport);
    await sessionStore.addGradeReports(body);
    loading.value = false;
    open.value = false;
}

defineExpose({
    open,
    files
})

</script>

<template>
    <Dialog v-model:open="open">
        <DialogTrigger as-child class>
            <Button variant="outline">Ajouter des rapports</Button>
        </DialogTrigger>

        <DialogContent class="max-w-2xl">
            <DialogHeader>
                <DialogTitle>Ajouter des rapports de notations</DialogTitle>
                <DialogDescription>Ajouter les fichier "<code>Grade Report</code>" et "<code>Problem Grade Report</code>" ici</DialogDescription>
            </DialogHeader>
            <InputFileUploader v-model="files" :multiple="true" :max-files="2" :conditions="conditions" />
            <DialogFooter class="mt-4">
                <Button :disabled="loading || !conditionsFilled" @click="handleSubmit" class="w-full" type="submit">
                    <Loader2 v-if="loading" class="w-4 h-4 mr-2 animate-spin" />
                    Valider
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>