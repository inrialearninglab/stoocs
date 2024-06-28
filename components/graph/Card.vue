<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';

defineProps<{
    title: string;
    description: string;
    loading: boolean;
    empty: boolean;
}>();
</script>

<template>
    <Card>
       <CardHeader class="pb-3">
           <CardTitle>{{ title }}</CardTitle>
           <CardDescription>{{ description }}</CardDescription>
       </CardHeader>
        <CardContent class="flex flex-col gap-5">
            <div v-if="!loading && empty" class="w-full h-[400px] items-center justify-center flex">
                <h2>Aucune donnée</h2>
            </div>
            <slot v-else />
        </CardContent>
    </Card>
</template>