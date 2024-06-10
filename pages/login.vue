<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Button } from '~/components/ui/button';

</script>

<template>
    <Card class="max-w-2xl w-full mx-auto">
        <CardHeader>
            <CardTitle>Connexion</CardTitle>
        </CardHeader>

        <CardContent class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <Label for="username">Nom d'utilisateur</Label>
                <Input id="username" type="text" />
            </div>

            <div class="flex flex-col gap-2">
                <Label for="password">Mot de passe</Label>
                <Input id="password" type="password" />
            </div>
        </CardContent>

        <CardFooter>
            <Button type="submit" class="w-full">Login</Button>
        </CardFooter>
    </Card>
</template>