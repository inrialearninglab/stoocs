<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '~/components/ui/card';
import { Skeleton } from '~/components/ui/skeleton';

defineProps<{
    title: string;
    description: string;
    icon: any;
    dividend?: number;
    divisor?: number;
    loading: boolean;
}>();

</script>

<template>
    <Card class="max-w-64">
        <CardHeader class="relative">
            <div class="flex gap-5 justify-between">
                <CardTitle>{{ title }} ({{ dividend }})</CardTitle>
                <Component :is="icon" class="size-4 text-muted-foreground" />
            </div>
            <CardDescription>{{ description }}</CardDescription>
            <GraphReportChip report="grade" />
        </CardHeader>
        <CardContent class="justify-center flex">
            <Skeleton v-if="loading" class="size-32 rounded-full" />
            <GraphRadialProgress v-else-if="dividend && divisor" :dividend="dividend" :divisor="divisor" class="w-32"/>
            <div v-else class="text-[8rem]">🥸</div>
        </CardContent>
    </Card>
</template>