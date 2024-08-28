<script lang="ts" setup="">
import { Eye, EyeOff, CircleAlert } from 'lucide-vue-next';

defineProps<{
    visible: boolean
}>();

const emits = defineEmits<{
    (e: 'click'): void;
}>();

</script>

<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger as-child>
                <Button variant="outline" size="icon" @click="emits('click')">
                    <Eye v-if="!visible" />
                    <EyeOff v-else />
                </Button>
            </TooltipTrigger>

            <TooltipContent>
                <p>{{ visible ? 'Masquer' : 'Afficher' }} le nombre d'apprenants</p>
                <small class="flex items-center gap-1"><CircleAlert class="size-3" /> Des bugs visuels peuvent survenir si le nombre d'apprenants est trop important pour la taille de la barre</small>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>