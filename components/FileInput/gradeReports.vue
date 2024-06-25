<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';

const files: Ref<File[]> = ref([]);

const gradeReportRegex = /^\w+_\d+_\w+_(grade_report)_\d{4}-\d{2}-\d{2}-\d{4}\.csv$/;
const problemGradeReportRegex = /^\w+_\d+_\w+_(problem_grade_report)_\d{4}-\d{2}-\d{2}-\d{4}\.csv$/;

const loading = ref(false);

const conditions = computed(() => {
    return {
        'Grade report': files.value.some(file => gradeReportRegex.test(file.name)),
        'Problem grade report': files.value.some(file => problemGradeReportRegex.test(file.name)),
    }
})

const conditionsFilled = computed(() => {
    return Object.values(conditions.value).every(condition => condition);
})
</script>

<template>
    <Dialog>
        <DialogTrigger as-child class>
            <Button variant="outline">Ajouter des rapports</Button>
        </DialogTrigger>

        <DialogContent class="max-w-2xl">
            <DialogHeader>
                <DialogTitle>Ajouter des rapports de notations</DialogTitle>
                <DialogDescription>Ajouter les fichier "<code>Grade Report</code>" et "<code>Problem Grade Report</code>" ici</DialogDescription>
            </DialogHeader>
            <FileUploader v-model="files" :multiple="true" :max-files="2" :conditions="conditions" />
            <DialogFooter class="mt-4">
                <Button :disabled="loading || !conditionsFilled" class="w-full" type="submit">
                    <Loader2 v-if="loading" class="w-4 h-4 mr-2 animate-spin" />
                    Valider
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>