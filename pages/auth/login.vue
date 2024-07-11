<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Button } from '~/components/ui/button';
import { login } from '~/services/auth.service';
import { Loader2, AlertCircle } from 'lucide-vue-next';
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useForm } from 'vee-validate';
import { emailMessage, requiredMessage } from '~/schema/users.schema';

const formSchema = toTypedSchema(z.object({
    email: z.string({ message: requiredMessage }).email({ message: emailMessage }),
    password: z.string({ message: requiredMessage })
}));

const form = useForm({
    validationSchema: formSchema,
});

const error = ref(false);

const onSubmit = form.handleSubmit(async (values) => {
    const success = await login(values.email, values.password);

    if (success) {
        await navigateTo('/moocs');
    } else {
        error.value = true;
    }
});

</script>

<template>
    <div class="flex flex-col gap-4 max-w-2xl w-full mx-auto">
        <Alert v-if="error" variant="destructive">
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

            <CardContent>
                <form @submit="onSubmit" class="flex flex-col gap-3">
                    <FormField v-slot="{ componentField }" name="email">
                        <FormItem>
                            <FormLabel>Mail</FormLabel>
                            <FormControl>
                                <Input type="email" v-bind="componentField"/>
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