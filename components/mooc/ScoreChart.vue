<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';

defineProps<{
    data: any
    loading: boolean;
}>();

const color = (d: any) => {
    if (d['Moyenne'] < 50) return '#EF4444';
    else if (d['Moyenne'] < 75) return '#F59E0B';
    else return '#10B981';
}
</script>

<template>
    <Card>
        <CardHeader class="pb-3">
            <CardTitle>Score</CardTitle>
            <CardDescription>Pourcentage de réussite moyen par question.Dans ce cas la moyenne ne prends en compte que les gens ayant répondu aux questions</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-col gap-5">
            <div v-if="!loading && !data" class="w-full h-[400px] items-center justify-center flex">
                <h2>Aucune donnée</h2>
            </div>
            <BarChart
                v-else
               :rounded-corners="4"
               :data="data"
               index="name"
               :categories="['Moyenne']"
               :color="color"
               :y-formatter="(tick, i) => tick + '%'"
            />
        </CardContent>
    </Card>
</template>