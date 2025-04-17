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
</script>

<template>
    <div class="space-y-8">
        <h1 class="text-center">Tableau de bord global</h1>

        <div class="flex gap-4 mx-auto w-fit">
            <MetricsNumberCard :value="totalEnrollments" noun="Apprenants" :icon="Users">
                <template #title>Nombre total d'apprenants</template>
            </MetricsNumberCard>
        </div>

        <MetricsChartsEnrollments
            v-if="globalReport.length"
            :details="globalReport"
            :loading="status === 'pending'"
            :start-date="globalReport[0].date"
            :hide-chip="true"
        />
    </div>
</template>
