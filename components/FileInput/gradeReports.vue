<script setup lang="ts">

const files: Ref<File[]> = ref([]);

const gradeReportRegex = /^\w+_\d+_\w+_(grade_report)_\d{4}-\d{2}-\d{2}-\d{4}\.csv$/;
const problemGradeReportRegex = /^\w+_\d+_\w+_(problem_grade_report)_\d{4}-\d{2}-\d{2}-\d{4}\.csv$/;

const conditions = computed(() => {
    return {
        'Grade report': files.value.some(file => gradeReportRegex.test(file.name)),
        'Problem grade report': files.value.some(file => problemGradeReportRegex.test(file.name)),
    }
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
            <DialogFooter>
                <Button class="w-full" type="submit">Valider</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>