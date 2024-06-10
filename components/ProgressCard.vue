<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '~/components/ui/card';

defineProps<{
    title: string;
    description: string;
    percentage: number;
}>();

</script>

<template>
    <Card class="max-w-64">
        <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
        </CardHeader>
        <CardContent class="justify-center flex">
            <RadialProgress :percentage="percentage" />
        </CardContent>
    </Card>
</template>