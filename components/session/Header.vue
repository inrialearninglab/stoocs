<script setup lang="ts">
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from '~/components/ui/breadcrumb';
import Refresh from '~/components/utils/Refresh.vue';
import { Skeleton } from '~/components/ui/skeleton';

const sessionStore = useSession();
const user = useUser();

const refresh = ref<InstanceType<typeof Refresh>>();
async function handleRefresh() {
    if (!refresh.value || !sessionStore.session.data) return;

    refresh.value.onStartLoad();
    await sessionStore.getSession(sessionStore.session.data.id);
    refresh.value.onEndLoad();
}

</script>
<template>
    <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center mb-2">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink as-child>
                            <NuxtLink to="/moocs">Moocs</NuxtLink>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink as-child>
                            <NuxtLink v-if="!sessionStore?.session?.loading" :to="`/sessions/${sessionStore?.session?.data?.id}`">
                                {{ sessionStore?.session?.data?.mooc.title }}/{{ sessionStore?.session?.data?.sessionName }}
                            </NuxtLink>
                            <Skeleton v-else class="w-80 h-6" />
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div class="flex gap-2 items-center">
                <SessionGuests v-if="sessionStore.session.data && user?.rolename === 'ILL'" :sessionId="sessionStore.session.data.id" />

                <Refresh ref="refresh" @refresh="handleRefresh" />
            </div>
        </div>

        <h1 class="text-center">{{ sessionStore?.session?.data?.mooc.title }}</h1>
        <h2 class="text-center text-muted-foreground">{{ sessionStore?.session?.data?.sessionName }}</h2>
        <p class="text-muted-foreground text-center">{{ sessionStore.session.data?.mooc.courseNumber }}</p>

    </div>
</template>
