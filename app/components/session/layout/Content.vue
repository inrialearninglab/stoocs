<script setup lang="ts">
import { Award, Eye, Speech, Users } from 'lucide-vue-next';

const sessionStore = useSession();

defineProps<{
    enrollmentsReport: boolean;
    gradeReport: boolean;
}>();
</script>

<template>
    <template v-if="sessionStore.session.data">
        <MetricsNumberCard
            v-if="gradeReport && sessionStore.totalEnrollments"
            :value="sessionStore.totalEnrollments"
            noun="Inscrits"
            chip="enrollment"
            :icon="Users"
            class="mx-auto"
        >
            <template #title>Nombre d'inscrits</template>
            <template #description
                >Nombre total d'inscrits le {{ sessionStore.enrollmentsReportDate }} (sans compter les
                désinscrits)</template
            >
        </MetricsNumberCard>

        <template v-if="gradeReport">
            <Separator />
            <div>
                <h2 class="text-center">Activité du MOOC</h2>
                <p class="text-center text-muted-foreground">
                    Calculé à partir des rapports de notations sur une base de
                    <strong>{{ sessionStore.totalUsers?.toLocaleString('fr-FR') }}</strong> inscrits
                </p>
            </div>

            <div class="flex flex-wrap gap-3 w-full justify-center">
                <MetricsSmallCard
                    title="Curieux"
                    description="Apprenants ayant chargé au moins une page d'exercice"
                    :icon="Eye"
                    :loading="sessionStore.gradeReport.loading"
                    :dividend="sessionStore.totalCurious"
                    :divisor="sessionStore.totalUsers"
                    report="grade"
                    label="Apprenants"
                />

                <MetricsSmallCard
                    title="Actifs"
                    description="Apprenants ayant soumis au moins une réponse à une question"
                    :icon="Speech"
                    :loading="sessionStore.gradeReport.loading"
                    :dividend="sessionStore.totalActive"
                    :divisor="sessionStore.totalUsers"
                    report="grade"
                    label="Apprenants"
                />

                <MetricsSmallCard
                    title="Éligibles / Actifs"
                    description="Apprenants actifs éligibles pour le badge/attestation"
                    :icon="Award"
                    :loading="sessionStore.session.loading"
                    :dividend="sessionStore.totalEligible"
                    :divisor="sessionStore.totalActive"
                    report="grade"
                    label="Apprenants"
                />

                <MetricsSmallCard
                    title="Éligibles / Inscrits"
                    description="Apprenants éligibles pour le badge/attestation"
                    :icon="Award"
                    :loading="sessionStore.gradeReport.loading"
                    :dividend="sessionStore.totalEligible"
                    :divisor="sessionStore.totalUsers"
                    report="grade"
                    label="Apprenants"
                />
            </div>
        </template>

        <template v-if="enrollmentsReport || gradeReport">
            <Separator />
            <div>
                <h2 class="text-center">Graphiques</h2>
                <p class="text-center text-muted-foreground">Graphiques sur différents aspects de la session</p>
            </div>

            <MetricsChartsEnrollments
                v-if="enrollmentsReport"
                :details="sessionStore.session.data.enrollmentsDetails"
                :loading="sessionStore.session.loading"
                :start-date="sessionStore.session.data.startDate?.split('T')[0]"
                :end-date="sessionStore.session.data.endDate?.split('T')[0]"
            />

            <template v-if="gradeReport">
                <MetricsChartsInterest
                    :loading="sessionStore.gradeReport.loading"
                    :data="sessionStore.gradeReport.data?.interest"
                />
                <MetricsChartsScore
                    :loading="sessionStore.gradeReport.loading"
                    :data="sessionStore.gradeReport.data?.score"
                    :cutoffs="sessionStore.session.data.cutoffs ?? 0"
                />
                <MetricsChartsThreshold
                    :loading="sessionStore.gradeReport.loading"
                    :data="sessionStore.gradeReport.data?.threshold ?? []"
                    :cutoffs="sessionStore.session.data.cutoffs ?? 0"
                />
            </template>
        </template>
    </template>
</template>
