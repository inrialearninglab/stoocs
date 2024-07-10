<script lang="ts" setup>
import { Users, Eye, Award, Speech } from 'lucide-vue-next'

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

        <FileInput v-if="!gradeReport && !enrollmentsReport" class="max-w-4xl mx-auto" />

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

        <div v-if="gradeReport" class="flex flex-wrap gap-3 mx-auto">
            <GraphProgressCard
                title="Curieux"
                description="Utilisateurs ayant chargé au moins une page d'activité"
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
                title="Eligibles"
                description="Utilisateurs actifs éligibles pour le badge/attestation"
                :icon="Award"
                :loading="sessionStore.session.loading"
                :dividend="sessionStore.totalEligible"
                :divisor="sessionStore.totalActive"
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
            <GraphThreshold :loading="sessionStore.gradeReport.loading" :data="sessionStore.gradeReport.data?.threshold" />
        </template>
    </div>
</template>