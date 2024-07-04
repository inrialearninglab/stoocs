<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '~/components/ui/card';
import { Skeleton } from '~/components/ui/skeleton';

defineProps<{
    title: string;
    description: string;
    percentage?: number;
    loading: boolean;
}>();

</script>

<template>
    <Card class="max-w-64">
        <CardHeader class="relative">
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
            <GraphReportChip report="grade" />
        </CardHeader>
        <CardContent class="justify-center flex">
            <Skeleton v-if="loading" class="size-32 rounded-full" />
            <GraphRadialProgress v-else-if="percentage" :percentage="percentage" class="w-32"/>
            <div v-else class="text-[8rem]">🥸</div>
        </CardContent>
    </Card>
</template>