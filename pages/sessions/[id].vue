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

</script>

<template>
    <div v-if="sessionStore.session.data" class="flex flex-col gap-12">
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
        </div>

        <Card class="w-full max-w-sm mx-auto relative">
            <CardHeader>
                <CardTitle>Nombre d'inscrits</CardTitle>
                <CardDescription>Nombre total d'inscrits le {{ sessionStore.enrollmentsReportDate }} (sans compter les désinscrits</CardDescription>
                <GraphReportChip report="enrollment" />
            </CardHeader>
            <CardContent>
                <h2 class="text-center">
                    {{ sessionStore.totalEnrollments?.toLocaleString('fr-FR') }} Inscrits
                </h2>
            </CardContent>
        </Card>

        <div class="flex flex-wrap gap-3 mx-auto">
            <GraphProgressCard
                title="Curieux"
                description="Utilisateurs ayant chargé au moins une page d'activité"
                :loading="sessionStore.gradeReport.loading || sessionStore.session.loading"
                :percentage="sessionStore.totalEnrollments && sessionStore.totalCurious ? Math.round(sessionStore.totalCurious / sessionStore.totalEnrollments * 100) : undefined"
            />

            <GraphProgressCard
                title="Actifs"
                description="Utilisateurs ayant soumis au moins une réponse à une question"
                :loading="sessionStore.gradeReport.loading || sessionStore.session.loading"
                :percentage="sessionStore.totalEnrollments && sessionStore.totalActive ? Math.round(sessionStore.totalActive / sessionStore.totalEnrollments * 100) : undefined"
            />

            <GraphProgressCard
                title="Eligibles"
                description="Utilisateurs actifs éligibles pour le badge/attestation"
                :loading="sessionStore.session.loading || sessionStore.gradeReport.loading"
                :percentage="sessionStore.totalEligible && sessionStore.totalActive ? Math.round(sessionStore.totalEligible / sessionStore.totalActive * 100) : undefined"
            />
        </div>

        <GraphEnrollments
            :details="sessionStore.session.data.enrollmentsDetails"
            :loading="sessionStore.session.loading"
            :start-date="sessionStore.session.data.startDate?.slice(0, 10)"
        />

        <GraphInterest :loading="sessionStore.gradeReport.loading" :data="sessionStore.gradeReport.data?.interest" />
        <GraphScore :loading="sessionStore.gradeReport.loading" :data="sessionStore.gradeReport.data?.score" />
        <GraphThreshold :loading="sessionStore.gradeReport.loading" :data="sessionStore.gradeReport.data?.threshold" />
    </div>
</template>