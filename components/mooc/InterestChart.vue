<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';

import { useMooc } from '~/stores/mooc.store';
import type { GradeReport } from '~/types';

const moocStore = useMooc();

const data = computed(() => {
    if (!moocStore.mooc || !moocStore.mooc.gradeReport) return [];

    let data = [];

    const firstLine = moocStore.mooc.gradeReport.report[0];
    const questions = firstLine.questions

    const participation = calculateParticipationPercentage(moocStore.mooc.gradeReport);
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
            <BarChart
                :rounded-corners="4"
                :data="data"
                index="name"
                :categories="['participation']"
                :y-formatter="(value) => `${value}%`"
            />
        </CardContent>
    </Card>
</template>