<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '~/components/ui/card';
import { Skeleton } from '~/components/ui/skeleton';

defineProps<{
    title: string;
    description: string;
    percentage?: number;
}>();

</script>

<template>
    <Card class="max-w-64">
        <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
        </CardHeader>
        <CardContent class="justify-center flex">
            <RadialProgress v-if="percentage" :percentage="percentage" class="w-32"/>
            <Skeleton v-else class="size-32 rounded-full" />
        </CardContent>
    </Card>
</template>