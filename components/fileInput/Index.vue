<script setup lang="ts">
import { useSession } from '~/stores/session.store';
import { Loader2 } from 'lucide-vue-next';

const loading = ref(false);
const sessionStore = useSession();
const files = ref<File[]>([]);

const gradeReportRegex = /^[\w-]+_\d+_[\w-]+_grade_report_\d{4}-\d{2}-\d{2}-\d{4}\.csv$/;
const problemGradeReportRegex = /^[\w-]+_\d+_[\w-]+_problem_grade_report_\d{4}-\d{2}-\d{2}-\d{4}\.csv$/;
const enrollmentsRegex = /^enrollments(\s\(\d+\))?\.csv$/;

function findGradeReport() {
    return files.value.find(file => gradeReportRegex.test(file.name) && !problemGradeReportRegex.test(file.name));
}

function findProblemGradeReport() {
    return files.value.find(file => problemGradeReportRegex.test(file.name));
}

function findEnrollments() {
    return files.value.find(file => enrollmentsRegex.test(file.name));
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
    // const gradeReport = findGradeReport();
    // const problemGradeReport = findProblemGradeReport();
    const enrollments = findEnrollments();

    const gradeReport = files.value.find(file => gradeReportRegex.test(file.name) && !problemGradeReportRegex.test(file.name));
    const problemGradeReport = files.value.find(file => problemGradeReportRegex.test(file.name));

    if (enrollments) {
        const body = new FormData();

        body.append('file', enrollments);

        await sessionStore.addEnrollmentsReport(body);
    }

    if (gradeReport && problemGradeReport) {

        const body = new FormData();

        body.append('gradeReport', gradeReport);
        body.append('problemGradeReport', problemGradeReport);
        await sessionStore.addGradeReports(body);
    }

    loading.value = false;
}

</script>

<template>
    <Card class="w-full">
        <CardHeader>
            <CardTitle>Envoyer des fichiers</CardTitle>
        </CardHeader>
        <CardContent>
            <InputFileUploaderGlobal :multiple="true" :max-files="3" v-model="files" :conditions="conditions" />
        </CardContent>
        <CardFooter>
            <Button :disabled="loading || !conditionsFilled" class="w-full" @click="handleSubmit">
                <Loader2 v-if="loading" class="w-4 h-4 mr-2 animate-spin" />
                Envoyer
            </Button>
        </CardFooter>
    </Card>
</template>