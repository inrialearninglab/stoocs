<script setup lang="ts">
import { Globe } from 'lucide-vue-next';
import type { MoocSession } from '~/types';
import { formatDate } from '~/utils';

defineProps<{
    session: MoocSession;
}>();

function isSesssionEnded(endDate?: string) {
    if (!endDate) return false;

    return new Date(endDate) < new Date();
}
</script>

<template>
    <Card class="hover:bg-border transition" as-child>
        <NuxtLink :to="`/sessions/${session.id}`">
            <CardHeader class="relative">
                <CardTitle class="flex gap-4 justify-between items-center">
                    <span>{{ session.sessionName }}</span>
                    <Globe class="text-muted-foreground" />
                </CardTitle>
                <div
                    class="size-4 rounded-full absolute -top-1 -right-1"
                    :class="
                        isSesssionEnded(session.endDate)
                            ? 'bg-error'
                            : session.sessionName === 'archiveouvert'
                              ? 'bg-warning'
                              : 'bg-success'
                    "
                ></div>
            </CardHeader>
            <CardContent>
                <span v-if="session.startDate && session.endDate" class="text-muted-foreground">
                    {{ formatDate(new Date(session.startDate)) }}
                    -
                    {{ formatDate(new Date(session.endDate)) }}
                </span>
            </CardContent>
        </NuxtLink>
    </Card>
</template>
