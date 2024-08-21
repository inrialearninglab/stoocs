<script lang="ts" setup>
import FileInput from '~/components/fileInput/Index.vue'
import FileInputGradeReports from '~/components/fileInput/GradeReports.vue'
import FileInputEnrollments from '~/components/fileInput/Enrollments.vue'
import { Upload, Loader2 } from 'lucide-vue-next'
import { type FileRejectReason, useDropzone } from 'vue3-dropzone';
import { isEnrollments, isGradeReport, isProblemGradeReport } from '~/utils';

const route = useRoute();
const router = useRouter();

if (!route.params.id) {
    router.push('/sessions');
}

const sessionStore = useSession();

onMounted(() => {
    if (!sessionStore.session.data || sessionStore.session.data.id !== route.params.id) {
        sessionStore.getSession(route.params.id as string);
    }
});

const enrollmentsReport = computed(() => Boolean(sessionStore.session.data?.enrollmentsDetails))
const gradeReport = computed(() => Boolean(sessionStore.gradeReport.data))

const dragging = ref(false);
let scrollY = 0;
function handleDragLeave(event: any) {
    if (event.currentTarget.contains(event.relatedTarget)) return;

    dragging.value = false;
    console.log('scrolling to ', scrollY)
    window.scrollTo(0, scrollY);
}

function handleDragEnter(event: any) {
    const { dataTransfer } = event;
    const { types } = dataTransfer;

    if (types.includes('Files')) {
        dragging.value = true;
    }
}

const globalFileInput: Ref<InstanceType<typeof FileInput> | null > = ref(null);
const enrollmentFileInput: Ref<InstanceType<typeof FileInputEnrollments> | null> = ref(null);
const gradeReportFileInput: Ref<InstanceType<typeof FileInputGradeReports> | null> = ref(null);

function onDrop(acceptFiles: File[], rejectReasons: FileRejectReason[]) {
    dragging.value = false;

    let enrollmentFile = false;
    let reportFile = false;

    for (const file of acceptFiles) {
        if (isEnrollments(file.name)) enrollmentFile = true;
        else if (isGradeReport(file.name) || isProblemGradeReport(file.name)) reportFile = true;
    }

    if (enrollmentFile && reportFile) {
        openFileInput(acceptFiles)
    } else if (enrollmentFile) {
        openEnrollmentFileInput(acceptFiles);
    } else if (reportFile) {
        openGradeReportFileInput(acceptFiles);
    }
}

const { getRootProps, getInputProps, ...rest } = useDropzone(({
    onDrop,
    multiple: true,
    accept: '.csv'
}))

function openEnrollmentFileInput(files?: File[]) {
    if (!enrollmentFileInput.value) return;

    enrollmentFileInput.value.open = true;
    if (files) {
        enrollmentFileInput.value.files = files;
        enrollmentFileInput.value.focusSubmit();
    }
}

function openGradeReportFileInput(files?: File[]) {
    if (!gradeReportFileInput.value) return;

    gradeReportFileInput.value.open = true;
    if (files) {
        gradeReportFileInput.value.files = files;
        gradeReportFileInput.value.focusSubmit();
    }
}

function openFileInput(files?: File[]) {
    if (!globalFileInput.value) return;

    globalFileInput.value.open = true;
    if (files) {
        globalFileInput.value.files = files;
        globalFileInput.value.focusSubmit();
    }
}

</script>

<template>
    <div @dragenter="handleDragEnter" @dragleave="handleDragLeave" class="flex flex-1 min-h-full">
        <div
            v-show="dragging"
            v-bind="getRootProps()"
            class="w-full border-2 border-dashed rounded-xl text-muted-foreground items-center flex"
        >
            <div class="flex flex-col gap-4 place-items-center w-full">
                <input v-bind="getInputProps()">
                <div class="rounded-full border border-dashed p-4 w-fit">
                    <Upload />
                </div>
                <h2>Déposez les fichiers ici !</h2>
            </div>
        </div>

        <div v-show="!dragging" class="flex w-full flex-col gap-12" >
            <SessionHeader />

            <template v-if="!sessionStore.session.loading">
                <div class="flex gap-6 mx-auto">
                    <div class="flex gap-2 items-center">
                        <GraphReportChip report="enrollment" :static="true" />
                        <p>{{ sessionStore.enrollmentsReportDate || 'Aucune donnée' }}</p>
                    </div>
                    <div class="flex gap-2 relative items-center">
                        <GraphReportChip report="grade" :static="true" />
                        <p>{{ sessionStore.gradeReportDate || 'Aucune donnée' }}</p>
                    </div>

                    <MoocAddReport
                        @open-enrollments="openEnrollmentFileInput()"
                        @open-grades="openGradeReportFileInput()"
                        @open-all="openFileInput()"
                    />
                </div>

                <div v-if="!enrollmentsReport && !gradeReport" class="mx-auto flex flex-col items-center">
                    <h2>Aucune données</h2>
                    <p class="text-muted-foreground mt-2">Pour ajouter des données glisser-déposer les fichiers sur cette page ou utiliser le bouton ci-dessus</p>
                </div>


                <FileInput ref="globalFileInput" />
                <FileInputGradeReports ref="gradeReportFileInput" />
                <FileInputEnrollments ref="enrollmentFileInput" />

                <SessionContent :enrollments-report="enrollmentsReport" :grade-report="gradeReport" />
            </template>

            <Loader2 v-else class="size-20 mx-auto animate-spin mt-12"/>
        </div>
    </div>
</template>