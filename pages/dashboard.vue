<script setup lang="ts">
import { Users } from 'lucide-vue-next';
import type { Mooc, MoocSession } from '@prisma/client';

definePageMeta({
    layout: 'fullpage',
});

type ExtendedMooc = Mooc & {
    sessions: MoocSession[];
};

const { data, status } = await useFetch<ExtendedMooc[]>('/api/moocs/dashboard');

const aggregatedEnrollments: Record<string, number> = {};
const globalReport: Ref<
    {
        date: string;
        enrollments: number;
    }[]
> = ref([]);

if (data.value) {
    data.value.forEach((item) => {
        item.sessions.forEach((session) => {
            if (session.enrollmentsDetails) {
                (session.enrollmentsDetails as Array<any>).forEach((detail) => {
                    if (aggregatedEnrollments[detail.date]) {
                        aggregatedEnrollments[detail.date] += detail.enrollments;
                    } else {
                        aggregatedEnrollments[detail.date] = detail.enrollments;
                    }
                });
            }
        });
    });

    globalReport.value = Object.keys(aggregatedEnrollments)
        .sort()
        .map((date) => ({
            date: date,
            enrollments: aggregatedEnrollments[date],
        }));
}

const totalEnrollments = computed(() => globalReport.value.reduce((acc, curr) => acc + curr.enrollments, 0));

const { data: total } = await useFetch<number>('/api/grafana/total');
const { data: enrollmentsByYear, status: enrollmentsStatus } = await useFetch('/api/grafana/by-year');
</script>

<template>
    <div class="space-y-8">
        <h1 class="text-center">Tableau de bord global</h1>

        <div class="flex flex-wrap gap-3 w-full justify-center">
            <div v-if="total" class="flex gap-4 w-fit">
                <MetricsNumberCard :value="total" noun="Inscrits" :icon="Users">
                    <template #title>Nombre total d'inscrits (Potsie)</template>
                    <template #description>Valeur provenant de Potsie (prends en compte les désinscrit)</template>
                </MetricsNumberCard>
            </div>

            <div class="flex gap-4 w-fit">
                <MetricsNumberCard :value="totalEnrollments" noun="Inscrits" :icon="Users">
                    <template #title>Nombre total d'inscrits (Stoocs)</template>
                    <template #description>
                        Valeur calculée depuis les données importées sur Stoocs (ne prends pas en compte les
                        désinscrits)
                    </template>
                </MetricsNumberCard>
            </div>
        </div>

        <MetricsChartsEnrollments
            v-if="globalReport.length"
            :details="globalReport"
            :loading="status === 'pending'"
            :start-date="globalReport[0].date"
            :hide-chip="true"
        />
        <pre>{{ enrollmentsByYear }}</pre>
        <MetricsChartsEnrollmentsByYear
            v-if="enrollmentsByYear"
            :data="enrollmentsByYear"
            :loading="enrollmentsStatus === 'pending'"
        />
    </div>
</template>
