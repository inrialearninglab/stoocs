<script setup lang="ts">
import { CircleHelp } from 'lucide-vue-next';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
</script>

<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger as-child>
                <CircleHelp class="text-muted-foreground cursor-pointer size-5" />
            </TooltipTrigger>
            <TooltipContent>
                <p><slot /></p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>
