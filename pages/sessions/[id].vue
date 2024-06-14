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
})

</script>

<template>
    <div v-if="sessionStore.session.data" class="flex flex-col gap-12">
        <h1 class="text-center">{{ sessionStore.session.data.mooc.title }}</h1>

        <h2 class="text-center border border-muted w-fit p-4 mx-auto rounded-lg">
            {{ sessionStore.totalEnrollments }} Inscrits
        </h2>

        <div class="flex flex-wrap gap-3 mx-auto">
            <ProgressCard
                title="Curieux"
                description="Utilisateurs ayant chargé au moins une page de quiz"
                :loading="sessionStore.gradeReport.loading || sessionStore.session.loading"
                :percentage="sessionStore.totalEnrollments && sessionStore.totalCurious ? Math.round(sessionStore.totalCurious / sessionStore.totalEnrollments * 100) : undefined"
            />

            <ProgressCard
                title="Actifs"
                description="Utilisateur ayant soumis au moins une réponse à un quiz"
                :loading="sessionStore.gradeReport.loading || sessionStore.session.loading"
                :percentage="sessionStore.totalEnrollments && sessionStore.totalActive ? Math.round(sessionStore.totalActive / sessionStore.totalEnrollments * 100) : undefined"
            />

            <ProgressCard
                title="Eligibles"
                description="Utilisateurs actifs éligibles pour le certificat"
                :loading="sessionStore.session.loading || sessionStore.gradeReport.loading"
                :percentage="sessionStore.totalEligible && sessionStore.totalActive ? Math.round(sessionStore.totalEligible / sessionStore.totalActive * 100) : undefined"
            />
        </div>

        <MoocEnrollments
            :details="sessionStore.session.data.enrollmentsDetails"
            :loading="sessionStore.session.loading"
            :start-date="sessionStore.session.data.startDate?.slice(0, 10)"
        />

        <MoocInterestChart :loading="sessionStore.gradeReport.loading" :grade-report="sessionStore.gradeReport.data" />
        <MoocScoreChart :loading="sessionStore.gradeReport.loading" :grade-report="sessionStore.gradeReport.data" />
    </div>
</template>