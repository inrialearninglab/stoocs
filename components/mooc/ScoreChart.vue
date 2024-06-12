<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';
import { useMooc } from '~/stores/mooc.store';
import type { GradeReport } from '~/types';
import Papa from 'papaparse';
import { Eye, EyeOff } from 'lucide-vue-next';

const moocStore = useMooc();

const data = computed(() => {
    if (!moocStore.mooc || !moocStore.mooc.gradeReport) return [];

    let data = [];

    const firstLine = moocStore.mooc.gradeReport.report[0];
    const problems = firstLine.problemGradeReport

    const problemAverages = calculateProblemAverage(moocStore.mooc.gradeReport);
    for (const problem of problems) {
        data.push({
            name: problem.label,
            average: problemAverages[problem.label] ?? 0,
        })
    }

    return data;
})

const problems = computed(() => {
    if (!moocStore.mooc || !moocStore.mooc.gradeReport) return [];

    const res = data.value.filter((d) => d.average < 75).sort((a, b) => a.average - b.average);
    return res.map((d) => ({ name: d.name, average: d.average }));
})

function calculateProblemAverage(gradeReport: GradeReport) {
    const problemStats:{ [key: string]: { total: number, totalScore: number, possible: number }} = {};

    gradeReport.report.forEach((reportLine) =>  {
        reportLine.problemGradeReport.forEach((problem) => {
            if (!problemStats[problem.label]) {
                if (problem.possible && problem.possible > 0) {
                    if (!problem.score) problem.score = 0;
                    problemStats[problem.label] = { total: 1, totalScore: problem.score, possible: problem.possible }
                }
            } else if(problem.possible && problem.possible > 0) {
                if(!problem.score) problem.score = 0;

                problemStats[problem.label].total ++;
                problemStats[problem.label].totalScore += problem.score;
            }
        })
    });

    const problemAverages: { [key: string]: number } = {};
    Object.keys(problemStats).forEach((label) => {
        const stats = problemStats[label];
        problemAverages[label] = (stats.totalScore / (stats.total * stats.possible)) * 100;
    });

    return problemAverages;
}

const color = (d: any) => {
    if (d.average < 50) return '#EF4444';
    else if (d.average < 75) return '#F59E0B';
    else return '#10B981';
}

async function exportTableToCSV() {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'problem-report.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const isTableVisible = ref(false);

</script>

<template>
    <Card>
        <CardHeader class="pb-3">
            <CardTitle>Score</CardTitle>
            <CardDescription>Pourcentage de réussite moyen par question.Dans ce cas la moyenne ne prends en compte que les gens ayant répondu aux questions</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-col gap-5">
            <BarChart
               :rounded-corners="4"
               :data="data"
               index="name"
               :categories="['average']"
               :color="color"
               :y-formatter="(tick, i) => tick + '%'"
            />

            <Separator />


            <div id="problem-table" class="flex flex-col gap-2 rounded border">
                <div class="p-3 border-b flex justify-between">
                    <h3>Rapport de problème</h3>
                    <Button @click="isTableVisible = !isTableVisible" variant="outline" size="icon">
                        <component :is="isTableVisible ? EyeOff : Eye" />
                    </Button>
                </div>
                <Table v-if="isTableVisible">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Exercice</TableHead>
                            <TableHead>Moyenne</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableRow v-for="problem in problems">
                        <TableCell>{{ problem.name }}</TableCell>
                        <TableCell>{{ problem.average }}%</TableCell>
                    </TableRow>
                </Table>
                <Button @click="exportTableToCSV" variant="outline" class="m-3">Export CSV</Button>
            </div>
        </CardContent>
    </Card>
</template>