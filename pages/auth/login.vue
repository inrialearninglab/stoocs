<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { Loader2, AlertCircle } from 'lucide-vue-next';
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useForm } from 'vee-validate';
import { emailMessage, requiredMessage } from '~/schema/users.schema';
import { login } from '~/services/auth.service';

const formSchema = toTypedSchema(z.object({
    email: z.string({ message: requiredMessage }).email({ message: emailMessage }),
    password: z.string({ message: requiredMessage })
}));

const form = useForm({
    validationSchema: formSchema,
});

const errorAlert = ref(false);

const onSubmit = form.handleSubmit(async (values) => {
    const { error } = await login(values.email, values.password);

    if (error) {
        errorAlert.value = true;
    } else {
        await navigateTo('/moocs');
    }
});

onMounted(() => {
    const mailInput = document.getElementById('mail');
    mailInput?.focus();
})

</script>

<template>
    <div class="flex flex-col gap-4 max-w-2xl w-full mx-auto">
        <Alert v-if="errorAlert" variant="destructive">
            <AlertCircle class="size-4" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>
                Vos identifiants sont incorrects. Veuillez réessayer.
            </AlertDescription>
        </Alert>

        <Card class="border-none shadow-none">
            <CardHeader>
                <CardTitle>Connexion</CardTitle>
                <CardDescription>Entrez votre adresse mail et votre mot de passe pour vous connecter.</CardDescription>
            </CardHeader>

            <CardContent>
                <form @submit="onSubmit" class="flex flex-col gap-3">
                    <FormField v-slot="{ componentField }" name="email">
                        <FormItem>
                            <FormLabel>Mail</FormLabel>
                            <FormControl>
                                <Input id="mail" type="email" v-bind="componentField"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>


                    <FormField v-slot="{ componentField }" name="password">
                        <FormItem>
                            <FormLabel>Mot de passe</FormLabel>
                            <FormControl>
                                <Input type="password" v-bind="componentField"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <Button :disabled="!form.meta.value.valid || form.isSubmitting.value" type="submit" class="mt-3">
                        <Loader2 v-if="form.isSubmitting.value" class="size-4 mr-2 animate-spin" />
                        Valider
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
</template>
