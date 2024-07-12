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
    <Card class="max-w-80 flex flex-col">
        <CardHeader class="relative">
            <div class="flex gap-5 justify-between">
                <CardTitle>{{ title }}</CardTitle>
                <Component :is="icon" class="size-4 text-muted-foreground" />
            </div>
            <CardDescription>{{ description }}</CardDescription>
            <GraphReportChip report="grade" />
        </CardHeader>
        <CardContent class="justify-center flex flex-1 items-end">
            <Skeleton v-if="loading" class="size-32 rounded-full" />
            <GraphRadialProgress v-else-if="dividend && divisor" :dividend="dividend" :divisor="divisor" class="size-32"/>
            <div v-else class="text-[8rem]">🥸</div>
        </CardContent>
        <CardFooter>
            <p class="text-xl text-center w-full">{{ dividend?.toLocaleString('fr-FR') }} Utilisateurs</p>
        </CardFooter>
    </Card>
</template>