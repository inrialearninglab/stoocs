<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';
import type { GradeReport } from '~/types';
import { calculateParticipationPercentage } from '~/utils/calculations.utils';

const props = defineProps<{
    gradeReport?: GradeReport;
    loading: boolean;
}>();

const data = computed(() => {
    if (!props.gradeReport) return [];
    let data = [];

    const firstLine = props.gradeReport.gradeReportLines[0];
    const questions = firstLine.gradeReportQuestions;

    const participation = calculateParticipationPercentage(props.gradeReport);
    for (const question of questions) {
        data.push({
            name: question.label,
            participation: participation[question.label] ?? 0,
        })
    }

    // Remove the Average because i don't really understand how to use it
    data = data.filter((item) => !item.name.endsWith('Avg'));
    // Sorting by name because there is some strange choice of order in the default data
    data.sort((a, b) => a.name > b.name ? 1 : -1);

    return data;
})

</script>

<template>
    <Card>
        <CardHeader class="pb-3">
            <CardTitle>Participation</CardTitle>
            <CardDescription>Pourcentage d'utilisateurs actifs ayant répondu à chaque question. Dans ce cas un utilisateur est considéré comme actif si il a obtenu un score supérieur à 0 dans au moins un exercice</CardDescription>
        </CardHeader>
        <CardContent>
            <div v-if="!loading && !gradeReport" class="w-full h-[400px] items-center justify-center flex">
                <h2>Aucune donnée</h2>
            </div>
            <BarChart
                v-else
                :rounded-corners="4"
                :data="data"
                index="name"
                :categories="['participation']"
                :y-formatter="(value) => `${value}%`"
            />
        </CardContent>
    </Card>
</template>