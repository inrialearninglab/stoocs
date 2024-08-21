<script setup lang="ts">
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from '~/components/ui/breadcrumb';
import { Pin } from 'lucide-vue-next';

const sessionStore = useSession();

function handlePin() {
    if (!sessionStore.session.data) return;

    sessionStore.pinMooc(sessionStore.session.data.mooc.id, sessionStore.isMoocPinned);
}

</script>
<template>
    <div v-if="sessionStore.session.data" class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
            <Breadcrumb class="mb-2">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink as-child>
                            <NuxtLink to="/moocs">Moocs</NuxtLink>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink as-child>
                            <NuxtLink :to="`/sessions/${sessionStore.session.data.id}`">
                                {{ sessionStore?.session?.data?.mooc.title }}/{{ sessionStore?.session?.data?.sessionName }}
                            </NuxtLink>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Button @click="handlePin" variant="outline" size="icon">
                <Pin class="size-6" :class="{ 'stroke-yellow-500 fill-yellow-500' : sessionStore.isMoocPinned }" />
            </Button>
        </div>

        <h1 class="text-center">{{ sessionStore?.session?.data?.mooc.title }}</h1>
        <h2 class="text-center text-muted-foreground">{{ sessionStore?.session?.data?.sessionName }}</h2>
        <p class="text-muted-foreground text-center">{{ sessionStore.session.data?.mooc.courseNumber }}</p>
    </div>
</template>