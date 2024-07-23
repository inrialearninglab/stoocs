<script setup lang="ts">
import type { Mooc } from '~/types';
import { ChevronDown } from 'lucide-vue-next';

const props = defineProps<{
    mooc: Mooc;
    pinned?: boolean
}>();

const isOpen = ref(Boolean(props.pinned));

const openedSessions = ref(props.mooc.sessions.filter(session => !session.ended && session.sessionName !== 'archiveouvert').length);
const closedSessions = ref(props.mooc.sessions.filter(session => session.ended && session.sessionName !== 'archiveouvert').length);
const archiveSessions = ref(props.mooc.sessions.filter(session => session.sessionName === 'archiveouvert').length)

</script>

<template>
    <Card class="select-none">
        <Collapsible v-model:open="isOpen">
            <CollapsibleTrigger as-child>
                <CardHeader :class="{ 'border-b': isOpen, 'rounded-b': !isOpen }" class="cursor-pointer hover:bg-muted hover:rounded-t transition p-4">
                    <div class="flex gap-3 justify-between items-center">
                        <div class="flex flex-col gap-3 flex-1">
                            <CardTitle class="text-xl">{{ mooc.title }}</CardTitle>
                            <CardDescription v-if="mooc.description">{{ mooc.description }}</CardDescription>
                        </div>
                        <div class="flex gap-2">
                            <p
                                v-if="openedSessions"
                                class="size-7 rounded-full border-2 border-green-500 text-green-500 flex items-center justify-center"
                            >
                                {{ openedSessions }}
                            </p>
                            <p
                                v-if="archiveSessions"
                                class="size-7 rounded-full border-2 border-orange-500 text-orange-500 flex items-center justify-center"
                            >
                                {{ archiveSessions }}
                            </p>
                            <p
                                v-if="closedSessions"
                                class="size-7 rounded-full border-2 border-red-500 text-red-500 flex items-center justify-center"
                            >
                                {{ closedSessions }}
                            </p>
                        </div>
                        <Button size="icon" variant="ghost" class="relative">
                            <ChevronDown class="transition-all absolute duration-200" :class="isOpen ? 'rotate-180' : '-rotate-0'" />
                        </Button>
                    </div>
                </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <CardContent class="p-2">
                    <Button v-for="session of mooc.sessions" variant="ghost" class="flex gap-2 items-center w-fit" as-child>
                        <NuxtLink :to="`/sessions/${session.id}`">
                            <div
                                class="size-4 rounded-full"
                                :class="session.ended ? 'bg-red-500' : session.sessionName === 'archiveouvert' ? 'bg-orange-500' : 'bg-green-500'"
                            ></div>
                            {{ session.sessionName }}
                        </NuxtLink>
                    </Button>
                </CardContent>
            </CollapsibleContent>
        </Collapsible>
    </Card>
</template>