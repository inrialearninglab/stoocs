<script setup lang="ts">
import type { Mooc } from '~/types';
import { ChevronDown } from 'lucide-vue-next';

defineProps<{
    mooc: Mooc;
}>();

const isOpen = ref(false);

</script>

<template>
    <Card>
        <Collapsible v-model:open="isOpen">
            <CardHeader :class="{ 'border-b': isOpen }">
                <div class="flex gap-3 justify-between items-center">
                    <div class="flex flex-col gap-3 flex-1">
                        <CardTitle>
                            {{ mooc.title }} ({{ mooc.sessions ? mooc.sessions.length : 0 }}
                            {{ mooc.sessions && mooc.sessions.length > 1 ? 'sessions' : 'session' }})
                        </CardTitle>
                        <CardDescription v-if="mooc.description">{{ mooc.description }}</CardDescription>
                    </div>
                    <CollapsibleTrigger as-child>
                        <Button size="icon" variant="outline" class="relative">
                            <ChevronDown class="transition-all absolute duration-200" :class="isOpen ? 'rotate-0' : '-rotate-180'" />
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </CardHeader>
            <CollapsibleContent>
                <CardContent class="p-5">
                    <div v-for="session of mooc.sessions" class="flex gap-2 items-center">
                        <div class="size-4 rounded-full" :class="session.ended ? 'bg-red-500' : 'bg-green-500'"></div>
                        <p>{{ session.sessionName }}</p>
                    </div>
                </CardContent>
            </CollapsibleContent>
        </Collapsible>
    </Card>
</template>