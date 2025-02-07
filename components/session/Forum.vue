<script setup lang="ts">
import { Users, MessageSquare, MessagesSquare, Loader2, SquareArrowOutUpRight } from 'lucide-vue-next';

const route = useRoute();
const sessionStore = useSession();
const user = useUser();

onMounted(() => {
    if (!sessionStore.session.data || sessionStore.session.data.id !== route.params.id || !sessionStore.forum) {
        sessionStore.getSession(route.params.id as string);
    }
});

const { data: discourseURL } = await useFetch<string>('/api/env/discourseUrl');
</script>

<template>
    <div>
        <Loader2 v-if="sessionStore.forum.loading" class="size-12 animate-spin mx-auto" />

        <div v-else-if="!sessionStore.forum.data" class="flex flex-col items-center gap-5">
            <h2>Aucune données de forum</h2>
            <SessionAddForum v-if="user?.rolename === 'ILL'" />
        </div>

        <div v-else class="flex flex-col gap-8">
            <div class="items-center flex flex-col gap-2">
                <Button as-child variant="link">
                    <NuxtLink :to="`${discourseURL}/${sessionStore.forum.data.instance}`" class="flex gap-3">
                        <h2 class="pb-0">Forum Discourse</h2>
                        <SquareArrowOutUpRight />
                    </NuxtLink>
                </Button>
                <h3 class="text-center text-muted-foreground">{{ sessionStore.forum.data.title }}</h3>
            </div>

            <div class="flex gap-4 w-full justify-center flex-wrap">
                <MetricsNumberCard :value="sessionStore.forum.data.users" noun="Utilisateurs" :icon="Users">
                    <template #title>Nombre d'utilisateurs</template>
                </MetricsNumberCard>

                <MetricsNumberCard
                    :value="sessionStore.forum.data.topics"
                    noun="Fils de discussion"
                    :icon="MessagesSquare"
                >
                    <template #title>Nombre de fils de discussion</template>
                </MetricsNumberCard>

                <MetricsNumberCard :value="sessionStore.forum.data.posts" noun="Messages" :icon="MessageSquare">
                    <template #title>Nombre de messages</template>
                </MetricsNumberCard>
            </div>

            <div class="flex gap-4 w-full justify-center flex-wrap">
                <MetricsNumberCard
                    :value="Number((sessionStore.forum.data.posts / sessionStore.forum.data.users).toFixed(1))"
                    noun="Messages par utilisateur"
                    class="max-w-md"
                >
                    <template #title>Moyenne du nombre de messages par utilisateur</template>
                </MetricsNumberCard>
            </div>

            <div class="space-y-2">
                <h2>Modérateurs</h2>
                <div class="flex gap-5 flex-wrap">
                    <div v-for="moderator in sessionStore.forum.data.moderators" class="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage :src="discourseURL + moderator.avatar" />
                        </Avatar>
                        <div class="flex flex-col">
                            <span>{{ moderator.name || moderator.username }}</span>
                            <span>{{ moderator.title }}</span>
                        </div>
                    </div>
                    <p v-if="sessionStore.forum.data.moderators.length === 0" class="text-muted-foreground">
                        Aucun modérateur
                    </p>
                </div>
            </div>

            <div class="space-y-2">
                <h2>Admins</h2>
                <div class="flex gap-5 flex-wrap">
                    <div v-for="admin in sessionStore.forum.data.admins" class="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage :src="discourseURL + admin.avatar" />
                        </Avatar>
                        <div class="flex flex-col">
                            <span>{{ admin.name || admin.username }}</span>
                            <span v-if="admin.title" class="text-muted-foreground text-sm">{{ admin.title }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <MetricsForumSignups
                :start-date="sessionStore.session.data?.startDate?.slice(0, 10)"
                :end-date="new Date().toISOString().slice(0, 10)"
            />
            <MetricsForumPosts
                :start-date="sessionStore.session.data?.startDate?.slice(0, 10)"
                :end-date="new Date().toISOString().slice(0, 10)"
            />
        </div>
    </div>
</template>
