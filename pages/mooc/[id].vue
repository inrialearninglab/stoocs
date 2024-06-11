<script setup lang="ts">
import { useMooc } from '~/stores/mooc.store';

const moocStore = useMooc();

if (!moocStore.mooc) moocStore.fetchMooc();

const title = 'Reproducible Research II: Practices and tools for managing computations and data';
</script>

<template>
    <div class="flex flex-col gap-12">
        <h1 class="text-center">{{ title }}</h1>

        <h2 class="text-center border border-muted w-fit p-4 mx-auto rounded-lg">
            {{ moocStore.totalEnrollments }} Inscrits
        </h2>

        <div class="flex flex-wrap gap-3 mx-auto">
            <ProgressCard
                v-if="moocStore.totalEnrollments && moocStore.totalActive"
                title="Actifs"
                description="Utilisateur ayant charger au moins une page de quiz"
                :percentage="Math.round(moocStore.totalActive / moocStore.totalEnrollments * 100)"
            />

            <ProgressCard
                v-if="moocStore.totalActive && moocStore.totalEligible"
                title="Eligibles"
                description="Utilisateurs actifs éligibles pour le certificat"
                :percentage="Math.round(moocStore.totalEligible / moocStore.totalActive * 100)"
            />
        </div>

        <MoocEnrollments />

        <MoocInterestChart />

        <MoocScoreChart />
    </div>
</template>