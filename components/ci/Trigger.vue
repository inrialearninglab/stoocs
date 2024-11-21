<script setup lang="ts">
import { Button } from '~/components/ui/button';
import { Loader2, CircleCheck, CircleX, CircleDot, CirclePause, CircleSlash, CircleDotDashed } from 'lucide-vue-next';
import type { Status } from '~/types/ci.type';

const statusMap: Record<Status, { icon: Component; color: string }> = {
    failed: {
        icon: CircleX,
        color: 'error',
    },
    created: {
        icon: CircleDotDashed,
        color: 'warning',
    },
    success: {
        icon: CircleCheck,
        color: 'success',
    },
    running: {
        icon: CircleDot,
        color: 'info',
    },
    pending: {
        icon: CirclePause,
        color: 'warning',
    },
    canceled: {
        icon: CircleSlash,
        color: 'error',
    },
};

const { status, checkStatus, loading } = usePipeline();

async function triggerPipeline() {
    try {
        const { pipelineId } = await $fetch<{ pipelineId: string }>('/api/ci/trigger');

        checkStatus(pipelineId);
    } catch (e) {
        console.error(e);
    }
}

const config = useRuntimeConfig();
</script>

<template>
    <div class="flex gap-2 items-center">
        <AlertDialog>
            <AlertDialogTrigger as-child>
                <Button variant="outline" class="w-fit border-2 border-dashed" :disabled="loading" size="sm">
                    <Loader2 v-if="loading" class="size-4 mr-2 animate-spin" />
                    Mettre à jour la liste des MOOCs
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Mettre à jour la liste des MOOCs</AlertDialogTitle>
                    <AlertDialogDescription
                        >Cette action prend un certain temps (environ 2 minutes). Elle déclenchera le robot de collecte
                        de données ({{ config.public.scrapperEmail }}) et mettra à jour la liste des
                        MOOCs.</AlertDialogDescription
                    >
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction @click="triggerPipeline">Confirmer</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

        <div
            v-if="status"
            class="flex items-center gap-1.5 h-9 py-2 px-3 border-2 border-dashed rounded-md text-sm"
            :class="`bg-${statusMap[status].color}-bg text-${statusMap[status].color}-text border-${statusMap[status].color}-border`"
        >
            <component :is="statusMap[status].icon" class="size-3.5" />
            <span>{{ status }}</span>
        </div>
    </div>
</template>
