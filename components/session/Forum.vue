<script setup lang="ts">
import { Users, MessageSquare, MessagesSquare, Loader2 } from 'lucide-vue-next';

const route = useRoute();
const sessionStore = useSession();
const config = useRuntimeConfig();

onMounted(() => {
    if (!sessionStore.session.data || sessionStore.session.data.id !== route.params.id || !sessionStore.forum) {
        sessionStore.getSession(route.params.id as string);
    }
});

</script>

<template>
    <div>
        <Loader2 v-if="sessionStore.forum.loading" class="size-12 animate-spin mx-auto"/>

        <div v-else-if="!sessionStore.forum.data" class="flex flex-col items-center gap-5">
            <h2>Aucune données de forum</h2>
            <SessionAddForum />
        </div>

        <div v-else class="flex flex-col gap-8">
            <div>
                <h2 class="text-center">Forum Discourse</h2>
                <h3 class="text-center text-muted-foreground">{{ sessionStore.forum.data.title }}</h3>
            </div>

            <div class="flex gap-4 w-full justify-center flex-wrap">
                <MetricsNumberCard
                    :value="sessionStore.forum.data.users"
                    noun="Utilisateurs"
                    :icon="Users"
                >
                    <template #title>Nombre d'utilisateurs</template>
                    <template #description>Nombre total d'utilisateurs inscrits sur le forum</template>
                </MetricsNumberCard>

                <MetricsNumberCard
                    :value="sessionStore.forum.data.topics"
                    noun="Fils de discussion"
                    :icon="MessagesSquare"
                >
                    <template #title>Nombre de fils de discussion</template>
                    <template #description>Nombre total de fils de discussion sur le forum</template>
                </MetricsNumberCard>

                <MetricsNumberCard
                    :value="sessionStore.forum.data.posts"
                    noun="Messages"
                    :icon="MessageSquare"
                >
                    <template #title>Nombre de messages</template>
                    <template #description>Nombre total de messages sur le forum</template>
                </MetricsNumberCard>
            </div>

            <div class="flex gap-4 w-full justify-center flex-wrap">
                <MetricsNumberCard
                    :value="sessionStore.forum.data.posts / sessionStore.forum.data.users"
                    noun="Messages par utilisateur"
                    class="max-w-md"
                >
                    <template #title>Moyenne de messages par utilisateur</template>
                    <template #description>Moyenne de messages par utilisateur sur le forum</template>
                </MetricsNumberCard>
            </div>

            <div class="space-y-2">
                <h2>Modérateurs</h2>
                <div class="flex gap-5 flex-wrap">
                    <div v-for="moderator in sessionStore.forum.data.moderators" class="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage :src="config.public.discourseURL + moderator.avatar" />
                        </Avatar>
                        <div class="flex flex-col">
                            <span>{{ moderator.name || moderator.username }}</span>
                            <span>{{ moderator.title }}</span>
                        </div>
                    </div>
                    <p v-if="sessionStore.forum.data.moderators.length === 0" class="text-muted-foreground">Aucun modérateur</p>
                </div>
            </div>

            <div class="space-y-2">
                <h2>Admins</h2>
                <div class="flex gap-5 flex-wrap">
                    <div v-for="admin in sessionStore.forum.data.admins" class="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage :src="config.public.discourseURL + admin.avatar" />
                        </Avatar>
                        <div class="flex flex-col">
                            <span>{{ admin.name || admin.username }}</span>
                            <span v-if="admin.title" class="text-muted-foreground text-sm">{{ admin.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
