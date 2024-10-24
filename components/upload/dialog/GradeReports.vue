<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';
import { useSession } from '~/stores/session.store';
import { isGradeReport, isProblemGradeReport } from '~/utils';
import { toast } from 'vue-sonner';

const files: Ref<File[]> = ref([]);
const sessionStore = useSession();

const loading = ref(false);
const open = ref(false);

const conditions = computed(() => {
    return {
        'Grade report': files.value.some(file => isGradeReport(file.name)),
        'Problem grade report': files.value.some(file => isProblemGradeReport(file.name)),
    }
})

const conditionsFilled = computed(() => {
    return Object.values(conditions.value).every(condition => condition);
})

async function handleSubmit() {
    loading.value = true;
    const gradeReport = files.value.find(file => isGradeReport(file.name));
    const problemGradeReport = files.value.find(file => isProblemGradeReport(file.name));

    if (!gradeReport || !problemGradeReport) return;

    const gradeReportCourseNumber = extractMetadata(gradeReport.name)?.courseNumber;
    const problemGradeReportCourseNumber = extractMetadata(problemGradeReport.name)?.courseNumber;

    if (gradeReportCourseNumber !== problemGradeReportCourseNumber) {
        toast.error('Les rapports ne semblent pas correspondre entre eux')
    } else if (gradeReportCourseNumber !== sessionStore?.session?.data?.mooc.courseNumber) {
        toast.error('Les rapports ne semblent pas correspondre à la session actuelle')
    } else {
        const body = new FormData();

        body.append('gradeReport', gradeReport);
        body.append('problemGradeReport', problemGradeReport);
        await sessionStore.addGradeReports(body);
    }

    loading.value = false;
    open.value = false;
    files.value = [];
}

async function focusSubmit() {
    await nextTick();
    const submit = document.getElementById('submit');
    if (submit) {
        submit.focus();
    }
}

defineExpose({
    open,
    files,
    focusSubmit
})

</script>

<template>
    <Dialog v-model:open="open">
        <DialogContent class="max-w-2xl">
            <DialogHeader>
                <DialogTitle>Ajouter des rapports de notations</DialogTitle>
                <DialogDescription>Ajouter les fichier "<code>Grade Report</code>" et "<code>Problem Grade Report</code>" ici</DialogDescription>
            </DialogHeader>
            <UploadInput v-model="files" :multiple="true" :max-files="2" :conditions="conditions" />
            <DialogFooter class="mt-4">
                <Button :disabled="loading || !conditionsFilled" @click="handleSubmit" class="w-full" type="submit" id="submit">
                    <Loader2 v-if="loading" class="w-4 h-4 mr-2 animate-spin" />
                    Valider
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
