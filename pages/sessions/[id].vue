<script lang="ts" setup="">
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

const files: Ref<File[]> = ref([]);

</script>

<template>
    <div v-if="sessionStore.session.data" class="flex flex-col gap-12">
        <div class="flex flex-col gap-2">
            <h1 class="text-center">{{ sessionStore.session.data.mooc.title }}</h1>
            <h2 class="text-center text-muted-foreground">{{ sessionStore.session.data.sessionName }}</h2>
        </div>

        <h2 class="text-center border border-muted w-fit p-4 mx-auto rounded-lg">
            {{ sessionStore.totalEnrollments }} Inscrits
        </h2>

        <div class="flex flex-wrap gap-3 mx-auto">
            <ProgressCard
                title="Curieux"
                description="Utilisateurs ayant chargé au moins une page d'activité"
                :loading="sessionStore.gradeReport.loading || sessionStore.session.loading"
                :percentage="sessionStore.totalEnrollments && sessionStore.totalCurious ? Math.round(sessionStore.totalCurious / sessionStore.totalEnrollments * 100) : undefined"
            />

            <ProgressCard
                title="Actifs"
                description="Utilisateurs ayant soumis au moins une réponse à une question"
                :loading="sessionStore.gradeReport.loading || sessionStore.session.loading"
                :percentage="sessionStore.totalEnrollments && sessionStore.totalActive ? Math.round(sessionStore.totalActive / sessionStore.totalEnrollments * 100) : undefined"
            />

            <ProgressCard
                title="Eligibles"
                description="Utilisateurs actifs éligibles pour le badge/attestation"
                :loading="sessionStore.session.loading || sessionStore.gradeReport.loading"
                :percentage="sessionStore.totalEligible && sessionStore.totalActive ? Math.round(sessionStore.totalEligible / sessionStore.totalActive * 100) : undefined"
            />
        </div>

        <div class="flex flex-col gap-2">
            <MoocEnrollments
                :details="sessionStore.session.data.enrollmentsDetails"
                :loading="sessionStore.session.loading"
                :start-date="sessionStore.session.data.startDate?.slice(0, 10)"
            />
            <FileInputEnrollments />
        </div>

        <div class="flex flex-col gap-2">
            <MoocInterestChart :loading="sessionStore.gradeReport.loading" :data="sessionStore.gradeReport.data?.interest" />
            <FileInputGradeReports />
        </div>
        <MoocScoreChart :loading="sessionStore.gradeReport.loading" :data="sessionStore.gradeReport.data?.score" />
    </div>
</template>