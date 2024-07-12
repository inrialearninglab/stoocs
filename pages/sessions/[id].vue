<script lang="ts" setup>
import FileInput from '~/components/fileInput/Index.vue'
import FileInputGradeReports from '~/components/fileInput/GradeReports.vue'
import FileInputEnrollments from '~/components/fileInput/Enrollments.vue'

import { Users, Eye, Award, Speech, Upload, CirclePlus } from 'lucide-vue-next'
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
    dragging.value = true;
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
    <div @dragenter="handleDragEnter" @dragleave="handleDragLeave" class="h-full">
        <div
            v-show="dragging"
            v-bind="getRootProps()"
            class="w-full h-full border-2 border-dashed rounded-xl text-muted-foreground items-center flex"
        >
            <div class="flex flex-col gap-4 place-items-center w-full">
                <input v-bind="getInputProps()">
                <div class="rounded-full border border-dashed p-4 w-fit">
                    <Upload />
                </div>
                <h2>Déposez les fichiers ici !</h2>
            </div>
        </div>

        <div v-show="!dragging" v-if="sessionStore.session.data" class="flex flex-col gap-12" >
            <div class="flex flex-col gap-2">
                <h1 class="text-center">{{ sessionStore.session.data.mooc.title }}</h1>
                <h2 class="text-center text-muted-foreground">{{ sessionStore.session.data.sessionName }}</h2>
            </div>

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
                <p class="text-muted-foreground mt-2">Pour ajouter des données glisser-déposer les fichiers sur cette page ou utiliser les boutons ci-dessous</p>
                <div class="flex flex-col gap-5 mt-8 items-center">
                    <div class="flex gap-5 flex-wrap justify-center">
                        <Button @click="openEnrollmentFileInput()" variant="outline" class="big-button relative">
                            <GraphReportChip report="enrollment" />
                            <CirclePlus class="mr-2 size-7" />
                            Ajouter un rapport d'inscription
                        </Button>
                        <Button @click="openGradeReportFileInput()" variant="outline" class="big-button relative">
                            <GraphReportChip report="grade" />
                            <CirclePlus class="mr-2 size-7" />
                            Ajouter des rapports de notations
                        </Button>
                    </div>

                    <Separator label="Ou" size="xl" />

                    <Button @click="openFileInput()" variant="outline" class="big-button w-full relative">
                        <GraphReportChip report="both" />
                        <CirclePlus class="mr-2 size-7" />
                        Ajouter tous les rapports
                    </Button>
                </div>
            </div>


            <FileInput ref="globalFileInput" />
            <FileInputGradeReports ref="gradeReportFileInput" />
            <FileInputEnrollments ref="enrollmentFileInput" />

            <Card v-if="enrollmentsReport" class="w-full max-w-sm mx-auto relative">
                <CardHeader>
                    <div class="flex gap-5 justify-between">
                        <CardTitle>Nombre d'inscrits</CardTitle>
                        <Users class="size-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Nombre total d'inscrits le {{ sessionStore.enrollmentsReportDate }} (sans compter les désinscrits)</CardDescription>
                    <GraphReportChip report="enrollment" />
                </CardHeader>
                <CardContent>
                    <h2 class="text-center">
                        {{ sessionStore.totalEnrollments?.toLocaleString('fr-FR') }} Inscrits
                    </h2>
                </CardContent>
            </Card>

            <div v-if="gradeReport" class="flex flex-wrap gap-3 w-full justify-center">
                <GraphProgressCard
                    title="Curieux"
                    description="Utilisateurs ayant chargé au moins une page d'exercice"
                    :icon="Eye"
                    :loading="sessionStore.gradeReport.loading"
                    :dividend="sessionStore.totalCurious"
                    :divisor="sessionStore.totalUsers"
                />

                <GraphProgressCard
                    title="Actifs"
                    description="Utilisateurs ayant soumis au moins une réponse à une question"
                    :icon="Speech"
                    :loading="sessionStore.gradeReport.loading"
                    :dividend="sessionStore.totalActive"
                    :divisor="sessionStore.totalUsers"
                />

                <GraphProgressCard
                    title="Eligibles - Actifs"
                    description="Utilisateurs actifs éligibles pour le badge/attestation"
                    :icon="Award"
                    :loading="sessionStore.session.loading"
                    :dividend="sessionStore.totalEligible"
                    :divisor="sessionStore.totalActive"
                />

                <GraphProgressCard
                    title="Eligibles - Utilisateurs"
                    description="Utilisateurs éligibles pour le badge/attestation"
                    :icon="Award"
                    :loading="sessionStore.gradeReport.loading"
                    :dividend="sessionStore.totalEligible"
                    :divisor="sessionStore.totalUsers"
                />
            </div>

            <GraphEnrollments
                v-if="enrollmentsReport"
                :details="sessionStore.session.data.enrollmentsDetails"
                :loading="sessionStore.session.loading"
                :start-date="sessionStore.session.data.startDate?.slice(0, 10)"
            />

            <template v-if="gradeReport">
                <GraphInterest :loading="sessionStore.gradeReport.loading" :data="sessionStore.gradeReport.data?.interest" />
                <GraphScore :loading="sessionStore.gradeReport.loading" :data="sessionStore.gradeReport.data?.score" />
                <GraphThreshold
                    :loading="sessionStore.gradeReport.loading"
                    :data="sessionStore.gradeReport.data?.threshold"
                    :cutoffs="sessionStore.session.data.cutoffs"
                />
            </template>
        </div>
    </div>
</template>

<style scoped>
.big-button {
    @apply text-xl font-semibold p-8;
}

</style>