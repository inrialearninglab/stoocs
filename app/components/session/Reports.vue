<script setup lang="ts">
import UploadDialogGlobal from '~/components/upload/dialog/Global.vue';
import UploadDialogEnrollments from '~/components/upload/dialog/Enrollments.vue';
import UploadDialogGradeReports from '~/components/upload/dialog/GradeReports.vue';
import { Upload, Loader2, Download, SquareArrowOutUpRight } from 'lucide-vue-next';
import { type FileRejectReason, useDropzone } from 'vue3-dropzone';
import { isEnrollments, isGradeReport, isProblemGradeReport } from '~/utils';

const route = useRoute();
const router = useRouter();
const user = useUser();

if (!route.params.id) {
    router.push('/sessions');
}

const sessionStore = useSession();

onMounted(() => {
    if (!sessionStore.session.data || sessionStore.session.data.id !== route.params.id) {
        sessionStore.getSession(route.params.id as string);
    }
});

const enrollmentsReport = computed(() => Boolean(sessionStore.session.data?.enrollmentsDetails));
const gradeReport = computed(() => Boolean(sessionStore.gradeReport.data));

const dragging = ref(false);
let scrollY = 0;
function handleDragLeave(event: any) {
    if (event.currentTarget.contains(event.relatedTarget)) return;

    dragging.value = false;
    console.log('scrolling to ', scrollY);
    window.scrollTo(0, scrollY);
}

function handleDragEnter(event: any) {
    const { dataTransfer } = event;
    const { types } = dataTransfer;

    if (types.includes('Files')) {
        dragging.value = true;
    }
}

const globalDialog: Ref<InstanceType<typeof UploadDialogGlobal> | null> = ref(null);
const enrollmentsDialog: Ref<InstanceType<typeof UploadDialogEnrollments> | null> = ref(null);
const gradeReportsDialog: Ref<InstanceType<typeof UploadDialogGradeReports> | null> = ref(null);

function onDrop(acceptFiles: File[], rejectReasons: FileRejectReason[]) {
    dragging.value = false;

    let enrollmentFile = false;
    let reportFile = false;

    for (const file of acceptFiles) {
        if (isEnrollments(file.name)) enrollmentFile = true;
        else if (isGradeReport(file.name) || isProblemGradeReport(file.name)) reportFile = true;
    }

    if (enrollmentFile && reportFile) {
        openGlobalDialog(acceptFiles);
    } else if (enrollmentFile) {
        openEnrollmentsDialog(acceptFiles);
    } else if (reportFile) {
        openGradeReportsDialog(acceptFiles);
    }
}

const { getRootProps, getInputProps, ...rest } = useDropzone({
    onDrop,
    multiple: true,
    accept: '.csv',
});

function openEnrollmentsDialog(files?: File[]) {
    if (!enrollmentsDialog.value) return;

    enrollmentsDialog.value.open = true;
    if (files) {
        enrollmentsDialog.value.files = files;
        enrollmentsDialog.value.focusSubmit();
    }
}

function openGradeReportsDialog(files?: File[]) {
    if (!gradeReportsDialog.value) return;

    gradeReportsDialog.value.open = true;
    if (files) {
        gradeReportsDialog.value.files = files;
        gradeReportsDialog.value.focusSubmit();
    }
}

function openGlobalDialog(files?: File[]) {
    if (!globalDialog.value) return;

    globalDialog.value.open = true;
    if (files) {
        globalDialog.value.files = files;
        globalDialog.value.focusSubmit();
    }
}

defineExpose({
    dragging,
});
</script>

<template>
    <div @dragenter="handleDragEnter" @dragleave="handleDragLeave" class="flex flex-1">
        <div
            v-if="user?.rolename === 'ILL'"
            v-show="dragging"
            v-bind="getRootProps()"
            class="w-full border-2 border-dashed rounded-xl text-muted-foreground items-center flex"
        >
            <div class="flex flex-col gap-4 place-items-center w-full">
                <input v-bind="getInputProps()" />
                <div class="rounded-full border border-dashed p-4 w-fit">
                    <Upload />
                </div>
                <h2>Déposez les fichiers ici !</h2>
            </div>
        </div>

        <div v-show="!dragging || user?.rolename === 'Guest'" class="flex w-full flex-col gap-12">
            <div class="flex flex-col">
                <Button as-child variant="link" v-if="sessionStore.session.data">
                    <NuxtLink :to="sessionStore.session.data?.url" class="flex mb-2 text-center gap-3" target="_blank">
                        <h1>{{ sessionStore?.session?.data?.mooc.title }}</h1>
                        <SquareArrowOutUpRight />
                    </NuxtLink>
                </Button>
                <h2 class="text-center text-muted-foreground">{{ sessionStore?.session?.data?.sessionName }}</h2>
                <p class="text-muted-foreground text-center">{{ sessionStore.session.data?.mooc.courseNumber }}</p>
            </div>

            <template v-if="!sessionStore.session.loading">
                <div class="flex gap-6 mx-auto">
                    <div class="flex flex-col items-center">
                        <div class="flex gap-2 items-center">
                            <MetricsReportChip report="enrollment" :static="true" />
                            <div class="flex flex-col text-center">
                                <p>Fichier inscriptions</p>
                            </div>
                            <UtilsHelp>
                                Ces données sont générées depuis le rapport d'inscription disponible sur le dashboard
                                FUN
                            </UtilsHelp>
                        </div>
                        <p class="text-muted-foreground">{{ sessionStore.enrollmentsReportDate || 'Aucune donnée' }}</p>
                        <div class="flex gap-2 mt-2" v-if="sessionStore.session.data?.url">
                            <Button size="icon" as-child class="size-9">
                                <NuxtLink :to="`${sessionStore.session.data.url}fun/dashboard/enrollments/?format=csv`">
                                    <Download class="size-5" />
                                </NuxtLink>
                            </Button>

                            <Button variant="outline" size="icon" as-child class="size-9">
                                <NuxtLink :to="`${sessionStore.session.data?.url}fun/dashboard`" target="_blank">
                                    <SquareArrowOutUpRight class="size-5" />
                                </NuxtLink>
                            </Button>
                        </div>
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="flex gap-2 relative items-center">
                            <MetricsReportChip report="grade" :static="true" />
                            <p>Rapports de notations</p>
                            <UtilsHelp>
                                Ces données sont générées depuis le &quot;grade report&quot; et le &quot;problem grade
                                report&quot; disponibles dans la vue instructeur de FUN
                            </UtilsHelp>
                        </div>
                        <p class="text-muted-foreground">{{ sessionStore.gradeReportDate || 'Aucune donnée' }}</p>
                        <Button variant="outline" size="icon" as-child class="mt-2 size-9">
                            <NuxtLink
                                v-if="sessionStore.session.data?.url"
                                :to="`${sessionStore.session.data.url}instructor#view-data_download`"
                                target="_blank"
                            >
                                <SquareArrowOutUpRight class="size-5" />
                            </NuxtLink>
                        </Button>
                    </div>

                    <SessionAddReport
                        div
                        v-if="user?.rolename === 'ILL'"
                        @open-enrollments="openEnrollmentsDialog()"
                        @open-grades="openGradeReportsDialog()"
                        @open-all="openGlobalDialog()"
                    />
                </div>

                <div v-if="!enrollmentsReport && !gradeReport" class="mx-auto flex flex-col items-center">
                    <h2>Aucune données</h2>
                    <p class="text-muted-foreground mt-2">
                        Pour ajouter des données glisser-déposer les fichiers sur cette page ou utiliser le bouton
                        ci-dessus
                    </p>
                </div>

                <UploadDialogGlobal ref="globalDialog" />
                <UploadDialogGradeReports ref="gradeReportsDialog" />
                <UploadDialogEnrollments ref="enrollmentsDialog" />

                <SessionLayoutContent :enrollments-report="enrollmentsReport" :grade-report="gradeReport" />
            </template>

            <Loader2 v-else class="size-12 animate-spin top-1/4 relative mx-auto" />
        </div>
    </div>
</template>
