<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';

import { useMooc } from '~/stores/mooc.store';
import type { GradeReport } from '~/types';

const moocStore = useMooc();

if (!moocStore.mooc) moocStore.fetchMooc();

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
function calculateParticipationPercentage(gradeReport: GradeReport) {
    const questionStats: { [key: string]: { total: number, scoreCount: number } } = {};

    let activeUsers = 0;
    gradeReport.report.forEach(reportLine => {
        let isActive = false;
        reportLine.questions.forEach(question => {
            if (!questionStats[question.label]) {
                questionStats[question.label] = { total: 1, scoreCount: question.score > 0 ? 1 : 0 };
                questionStats[question.label] = { total: 1, scoreCount: question.score > 0 ? 1 : 0 };
            } else {
                questionStats[question.label].total += 1;
                if (question.score > 0) {
                    questionStats[question.label].scoreCount += 1;
                    isActive = true;
                }
            }
        });
        if (isActive) activeUsers ++;
    });

    const participationPercentages: { [key: string]: number } = {};

    Object.keys(questionStats).forEach(questionLabel => {
        const stats = questionStats[questionLabel];
        participationPercentages[questionLabel] = (stats.scoreCount / activeUsers) * 100;
    });

    return participationPercentages;
}

</script>

<template>
    <div class="flex flex-col">
        <h2>Participation</h2>
        <small class="text-sm text-muted-foreground">Ce graphique montre le pourcentage d'utilisateurs (actifs sur les questions) ayant répondu à chaque question</small>
        <BarChart
            :rounded-corners="4"
            :data="data"
            index="name"
            :categories="['participation']"
            :y-formatter="(value) => `${value}%`"
        />
    </div>
</template>