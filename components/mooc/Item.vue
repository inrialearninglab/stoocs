<script setup lang="ts">
import type { Mooc } from '~/types';
import { ChevronDown } from 'lucide-vue-next';
import { Badge } from '~/components/ui/badge';

const props = defineProps<{
    mooc: Mooc;
}>();

const isOpen = ref(false);

const openedSessions = ref(props.mooc.sessions.filter(session => !session.ended).length);
const closedSessions = ref(props.mooc.sessions.filter(session => session.ended).length);

</script>

<template>
    <Card class="select-none">
        <Collapsible v-model:open="isOpen">
            <CollapsibleTrigger as-child>
                <CardHeader :class="{ 'border-b': isOpen, 'rounded-b': !isOpen }" class="cursor-pointer hover:bg-muted hover:rounded-t">
                    <div class="flex gap-3 justify-between items-center">
                        <div class="flex flex-col gap-3 flex-1">
                            <CardTitle>{{ mooc.title }}</CardTitle>
                            <CardDescription v-if="mooc.description">{{ mooc.description }}</CardDescription>
                        </div>
                        <div class="flex gap-3">
                            <Badge v-if="openedSessions" class="bg-green-500">
                                {{ openedSessions }} {{ openedSessions > 1 ? 'sessions ouvertes' : 'session ouverte' }}
                            </Badge>
                            <Badge v-if="closedSessions" class="bg-red-500">
                                {{ closedSessions }} {{ closedSessions > 1 ? 'sessions fermées' : 'session fermée' }}
                            </Badge>
                        </div>
                        <Button size="icon" variant="ghost" class="relative">
                            <ChevronDown class="transition-all absolute duration-200" :class="isOpen ? 'rotate-0' : '-rotate-180'" />
                        </Button>
                    </div>
                </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <CardContent class="p-5">
                    <Button v-for="session of mooc.sessions" variant="ghost" class="flex gap-2 items-center w-fit" as-child>
                        <NuxtLink :to="`/sessions/${session.id}`">
                            <div class="size-4 rounded-full" :class="session.ended ? 'bg-red-500' : 'bg-green-500'"></div>
                            {{ session.sessionName }}
                        </NuxtLink>
                    </Button>
                </CardContent>
            </CollapsibleContent>
        </Collapsible>
    </Card>
</template>