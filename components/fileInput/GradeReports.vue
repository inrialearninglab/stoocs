<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';
import { useSession } from '~/stores/session.store';
import { isGradeReport, isProblemGradeReport } from '~/utils';

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

    const body = new FormData();

    body.append('gradeReport', gradeReport);
    body.append('problemGradeReport', problemGradeReport);
    await sessionStore.addGradeReports(body);
    loading.value = false;
    open.value = false;
    files.value = [];
}

defineExpose({
    open,
    files
})

</script>

<template>
    <Dialog v-model:open="open">
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