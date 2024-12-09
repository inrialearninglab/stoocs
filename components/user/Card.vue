<script setup lang="ts">
import type { User } from 'lucia';
import { Trash2, PenLine } from 'lucide-vue-next';
import { useUsers } from '~/stores/users.store';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '~/components/ui/card';
import BorderBeam from '~/components/ui/BorderBeam.vue';

defineProps<{
    user: User;
    profile?: boolean;
}>();

const usersStore = useUsers();
</script>

<template>
    <Card class="relative">
        <CardHeader class="items-center">
            <UserAvatar :user="user" size="lg" class="mb-4" />

            <CardTitle>{{ user.firstname }} {{ user.lastname }}</CardTitle>
            <CardDescription>{{ user.email }}</CardDescription>
        </CardHeader>
        <CardFooter class="flex gap-2">
            <Button v-if="profile" variant="secondary" class="flex-1" as-child>
                <NuxtLink to="/users/update" class="flex items-center">
                    <PenLine class="size-4 mr-2" />
                    Modifier
                </NuxtLink>
            </Button>
            <AlertDialog v-if="profile">
                <AlertDialogTrigger as-child>
                    <Button variant="destructive" class="flex-1">
                        <Trash2 class="size-4 mr-2" />
                        Supprimer
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Êtes-vous absolument sûr ?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Cette action ne peut pas être annulée. Cela supprimera définitivement votre compte et
                            effacera vos données de nos serveurs.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <Button variant="destructive" as-child>
                            <AlertDialogAction @click="usersStore.deleteUser()">Continuer</AlertDialogAction>
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </CardFooter>
        <BorderBeam :duration="10" v-if="user.isAdmin && !profile" />
    </Card>
</template>
