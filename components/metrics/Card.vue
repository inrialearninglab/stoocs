<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';

defineProps<{
    title: string;
    loading: boolean;
    empty: boolean;
    report: 'enrollment' | 'grade';
}>();
</script>

<template>
    <Card>
        <div class="flex justify-between">
            <CardHeader class="pb-3 relative flex-1">
                <CardTitle>{{ title }}</CardTitle>
                <CardDescription>
                    <slot name="description" />
                </CardDescription>
                <MetricsReportChip :report="report" />
            </CardHeader>
            <div class="p-6 pb-0">
                <slot name="legend" />
            </div>
        </div>
        <div class="px-6">
            <slot name="toolbar" />
        </div>
        <CardContent class="flex flex-col gap-5">
            <div v-if="!loading && empty" class="w-full h-[400px] items-center justify-center flex">
                <h2>Aucune donnée</h2>
            </div>
            <slot v-else />
        </CardContent>
    </Card>
</template>
