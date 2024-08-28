<script setup lang="ts">
import { Award, Eye, Speech, Users } from 'lucide-vue-next';

const sessionStore = useSession();

defineProps<{
    enrollmentsReport: boolean,
    gradeReport: boolean
}>();

</script>

<template>
    <template v-if="sessionStore.session.data">
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
                description="Apprenants ayant chargé au moins une page d'exercice"
                :icon="Eye"
                :loading="sessionStore.gradeReport.loading"
                :dividend="sessionStore.totalCurious"
                :divisor="sessionStore.totalUsers"
            />

            <GraphProgressCard
                title="Actifs"
                description="Apprenants ayant soumis au moins une réponse à une question"
                :icon="Speech"
                :loading="sessionStore.gradeReport.loading"
                :dividend="sessionStore.totalActive"
                :divisor="sessionStore.totalUsers"
            />

            <GraphProgressCard
                title="Éligibles - Actifs"
                description="Apprenants actifs éligibles pour le badge/attestation"
                :icon="Award"
                :loading="sessionStore.session.loading"
                :dividend="sessionStore.totalEligible"
                :divisor="sessionStore.totalActive"
            />

            <GraphProgressCard
                title="Éligibles - Apprenants"
                description="Apprenants éligibles pour le badge/attestation"
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
    </template>
</template>