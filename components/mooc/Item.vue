<script setup lang="ts">
import type { Mooc } from '~/types';
import { Star } from 'lucide-vue-next';

const props = defineProps<{
    mooc: Mooc;
    pinned?: boolean
}>();

const isOpen = ref(Boolean(props.pinned));
const moocsStore = useMoocs();

const openedSessions = computed(() => props.mooc.sessions.filter(session => !session.ended && session.sessionName !== 'archiveouvert').length);
const closedSessions = computed(() => props.mooc.sessions.filter(session => session.ended && session.sessionName !== 'archiveouvert').length);
const archiveSessions = computed(() => props.mooc.sessions.filter(session => session.sessionName === 'archiveouvert').length)

</script>

<template>
    <Card class="select-none">
            <CardHeader :class="{ 'rounded-b': !isOpen }" class="transition p-4">
                <div class="flex gap-3 justify-between items-center">
                    <div class="flex flex-col gap-3 flex-1">
                        <CardTitle class="text-xl">{{ mooc.title }}</CardTitle>
                        <CardDescription v-if="mooc.description">{{ mooc.description }}</CardDescription>
                    </div>
                    <div class="flex gap-3">
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

                    <Button @click="moocsStore.pin(mooc.id, Boolean(pinned))" variant="outline" size="icon">
                        <Star class="size-6" :class="{ 'stroke-yellow-500 fill-yellow-500' : pinned }" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent class="p-2 flex gap-2">
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
    </Card>
</template>
