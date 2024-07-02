<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Button } from '~/components/ui/button';
import { login } from '~/services/auth.service';
import { Loader2, AlertCircle } from 'lucide-vue-next';
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert';

const user = useUser();

const form = reactive({
    email: '',
    password: '',
});

const loading = ref(false);
const error = ref(false);

async function onSubmit() {
    loading.value = true;
    const res = await login(form.email, form.password);
    loading.value = false;

    if (res)  {
        user.value = res;
        await navigateTo('/moocs');
    } else {
        error.value = true;
    }
}

</script>

<template>
    <div class="flex flex-col gap-4 max-w-2xl w-full mx-auto">
        <Alert variant="destructive">
            <AlertCircle class="size-4" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>
                Vos identifiants sont incorrects. Veuillez réessayer.
            </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle>Connexion</CardTitle>
            </CardHeader>

            <CardContent class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <Label for="username">Nom d'utilisateur</Label>
                    <Input type="email" id="username" v-model="form.email" />
                </div>

                <div class="flex flex-col gap-2">
                    <Label for="password">Mot de passe</Label>
                    <Input id="password" type="password" v-model="form.password"/>
                </div>
            </CardContent>

            <CardFooter>
                <Button :disabled="loading" type="submit" class="w-full" @click="onSubmit">
                    <Loader2 v-if="loading" class="size-4 mr-2 animate-spin" />
                    Connexion
                </Button>
            </CardFooter>
        </Card>
    </div>
</template>