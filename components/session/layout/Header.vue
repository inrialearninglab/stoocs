<script setup lang="ts">
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '~/components/ui/breadcrumb';
import Refresh from '~/components/utils/Refresh.vue';
import { Skeleton } from '~/components/ui/skeleton';

const sessionStore = useSession();
const usersStore = useUsers();
const user = useUser();

const refresh = ref<InstanceType<typeof Refresh>>();
async function handleRefresh() {
    if (!refresh.value || !sessionStore.session.data) return;

    refresh.value.onStartLoad();
    await sessionStore.getSession(sessionStore.session.data.id);
    await usersStore.fetchUsers();
    refresh.value.onEndLoad();
}
</script>
<template>
    <div
        class="flex justify-between items-center mb-2 sticky border-b top-[3.75rem] w-full py-2 px-4 bg-background/70 backdrop-blur-lg z-10 h-[3.75rem]"
    >
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
                        <NuxtLink
                            v-if="!sessionStore?.session?.loading"
                            :to="`/sessions/${sessionStore?.session?.data?.id}`"
                        >
                            {{ sessionStore?.session?.data?.mooc.title }}/{{ sessionStore?.session?.data?.sessionName }}
                        </NuxtLink>
                        <Skeleton v-else class="w-80 h-6" />
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <div class="flex gap-2 items-center">
            <SessionGuests
                v-if="sessionStore.session.data && user?.rolename === 'ILL'"
                :sessionId="sessionStore.session.data.id"
            />

            <Refresh ref="refresh" @refresh="handleRefresh" class="size-9" />
        </div>
    </div>
</template>
