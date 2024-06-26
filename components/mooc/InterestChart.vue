<script setup lang="ts">
import { BarChart } from '~/components/ui/chart-bar';

defineProps<{
    data: any;
    loading: boolean;
}>();

</script>

<template>
    <Card>
        <CardHeader class="pb-3">
            <CardTitle>Participation</CardTitle>
            <CardDescription>Pourcentage d'utilisateurs actifs ayant répondu à chaque question. Dans ce cas un utilisateur est considéré comme actif si il a obtenu un score supérieur à 0 dans au moins un exercice</CardDescription>
        </CardHeader>
        <CardContent>
            <div v-if="!loading && !data" class="w-full h-[400px] items-center justify-center flex">
                <h2>Aucune donnée</h2>
            </div>
            <BarChart
                v-else
                :rounded-corners="4"
                :data="data"
                index="name"
                :categories="['Participation']"
                :y-formatter="(value) => `${value}%`"
            />
        </CardContent>
    </Card>
</template>