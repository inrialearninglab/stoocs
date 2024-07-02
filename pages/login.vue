<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Button } from '~/components/ui/button';
import { useAuth } from '~/stores/auth.store';

const router = useRouter();
const authStore = useAuth();

const form = reactive({
    email: '',
    password: '',
});

async function onSubmit() {
    await authStore.login(form.email, form.password);
    if (authStore.user) router.push('/moocs');
}

</script>

<template>
    <Card class="max-w-2xl w-full mx-auto">
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
            <Button type="submit" class="w-full" @click="onSubmit">Connexion</Button>
        </CardFooter>
    </Card>
</template>