<script setup lang="ts">
import { resetPassword } from '~/services/auth.service';
import { AlertCircle } from 'lucide-vue-next';
import { toast } from 'vue-sonner';

const route = useRoute();

const errorMessage = ref('');
async function updatePassword(password: string) {
    const { error } = await resetPassword(password, route.params.token as string);
    if (error) {
        console.log('error', error);
        if (error.status === 404) {
            errorMessage.value = 'Le lien actuel est invalide';
        } else if (error.status === 400) {
            errorMessage.value = 'Le lien actuel a expiré';
        } else {
            errorMessage.value = 'Une erreur est survenue';
        }
    } else {
        toast.success('Votre mot de passe à été modifié avec succès');
        await navigateTo('/login');
    }
}
</script>

<template>
    <div class="max-w-2xl mx-auto w-full space-y-4">
        <Alert v-if="errorMessage" variant="destructive">
            <AlertCircle class="size-4" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription> {{ errorMessage }} </AlertDescription>
        </Alert>

        <ProfileFormPassword @submit="updatePassword" />
    </div>
</template>
