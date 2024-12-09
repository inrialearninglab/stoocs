<script setup lang="ts">
import type { Mooc } from '~/types';
import { Star, ArrowRight } from 'lucide-vue-next';

const props = defineProps<{
    mooc: Mooc;
    pinned?: boolean;
}>();

const isOpen = ref(Boolean(props.pinned));
const moocsStore = useMoocs();

const openedSessions = computed(
    () => props.mooc.sessions.filter((session) => !session.ended && session.sessionName !== 'archiveouvert').length,
);
const closedSessions = computed(
    () => props.mooc.sessions.filter((session) => session.ended && session.sessionName !== 'archiveouvert').length,
);
const archiveSessions = computed(
    () => props.mooc.sessions.filter((session) => session.sessionName === 'archiveouvert').length,
);
</script>

<template>
    <Card>
        <CardHeader :class="{ 'rounded-b': !isOpen }" class="transition p-4">
            <div class="flex gap-3 justify-between items-center">
                <div class="flex flex-col gap-3 flex-1">
                    <CardTitle class="text-xl">{{ mooc.title }}</CardTitle>
                    <CardDescription v-if="mooc.description">{{ mooc.description }}</CardDescription>
                </div>
                <div class="flex gap-3">
                    <p
                        v-if="openedSessions"
                        class="size-7 rounded-full border-2 border-success text-success flex items-center justify-center"
                    >
                        {{ openedSessions }}
                    </p>
                    <p
                        v-if="archiveSessions"
                        class="size-7 rounded-full border-2 border-warning text-warning flex items-center justify-center"
                    >
                        {{ archiveSessions }}
                    </p>
                    <p
                        v-if="closedSessions"
                        class="size-7 rounded-full border-2 border-error text-error flex items-center justify-center"
                    >
                        {{ closedSessions }}
                    </p>
                </div>

                <Button @click="moocsStore.pin(mooc.id, Boolean(pinned))" variant="outline" size="icon">
                    <Star class="size-6" :class="{ 'stroke-yellow-500 fill-yellow-500': pinned }" />
                </Button>
            </div>
        </CardHeader>
        <CardContent class="px-4 pb-4 flex gap-2">
            <Button v-for="session of mooc.sessions" variant="secondary" class="flex gap-2 items-center w-fit" as-child>
                <NuxtLink :to="`/sessions/${session.id}`">
                    <div
                        class="size-4 rounded-full"
                        :class="
                            session.ended
                                ? 'bg-error'
                                : session.sessionName === 'archiveouvert'
                                  ? 'bg-warning'
                                  : 'bg-success'
                        "
                    ></div>
                    {{ session.sessionName }}

                    <ArrowRight class="size-5" />
                </NuxtLink>
            </Button>
        </CardContent>
    </Card>
</template>
