<script setup lang="ts">
import { useSession } from '~/stores/session.store';
import { Loader2 } from 'lucide-vue-next';
import { isEnrollments, isGradeReport, isProblemGradeReport } from '~/utils';

const open = ref(false);
const loading = ref(false);
const sessionStore = useSession();
const files = ref<File[]>([]);

function findGradeReport() {
    return files.value.find(file => isGradeReport(file.name));
}

function findProblemGradeReport() {
    return files.value.find(file => isProblemGradeReport(file.name));
}

function findEnrollments() {
    return files.value.find(file => isEnrollments(file.name));
}

const conditions = computed(() => {
    return [
        {
            title: 'Rapport de notes',
            conditions: {
                'Grade report': findGradeReport(),
                'Problem grade report': findProblemGradeReport()
            },
            type: 'grade'
        },
        {
            title: 'Rapport d\'inscription',
            conditions: {
                'enrollments.csv': findEnrollments()
            },
            type: 'enrollment'
        }
    ]
})

const conditionsFilled = computed(() => {
    return conditions.value.some(condition => Object.values(condition.conditions).every(condition => condition));
})

async function handleSubmit() {
    loading.value = true;
    const enrollments = findEnrollments();
    const gradeReport = findGradeReport();
    const problemGradeReport = findProblemGradeReport();

    if (enrollments) {
        const body = new FormData();

        body.append('file', enrollments);

        await sessionStore.addEnrollmentsReport(body);

        files.value.splice(files.value.indexOf(enrollments), 1);
    }

    if (gradeReport && problemGradeReport) {
        const body = new FormData();

        body.append('gradeReport', gradeReport);
        body.append('problemGradeReport', problemGradeReport);
        await sessionStore.addGradeReports(body);

        files.value.splice(files.value.indexOf(gradeReport), 1);
        files.value.splice(files.value.indexOf(problemGradeReport), 1);
    }

    loading.value = false;
    if (files.value.length === 0) open.value = false;
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
                <DialogTitle>Ajouter des rapports</DialogTitle>
<!--                <DialogDescription>Ajouter les fichier "<code>Grade Report</code>" et "<code>Problem Grade Report</code>" ici</DialogDescription>-->
            </DialogHeader>
            <InputFileUploaderGlobal :multiple="true" :max-files="3" v-model="files" :conditions="conditions" />
            <DialogFooter class="mt-4">
                <Button :disabled="loading || !conditionsFilled" @click="handleSubmit" class="w-full" type="submit" id="submit">
                    <Loader2 v-if="loading" class="size-4 mr-2 animate-spin" />
                    Valider
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>