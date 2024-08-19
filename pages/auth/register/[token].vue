<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useForm } from 'vee-validate';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Loader2, AlertCircle } from 'lucide-vue-next';
import {
    emailMessage,
    passwordMatchMessage,
    passwordMessage,
    passwordRequirements,
    requiredMessage
} from '~/schema/users.schema';

useHead({
    meta: [
        {
            name: 'referrer',
            content: 'strict-origin'
        }
    ]
});

const formSchema = toTypedSchema(z.object({
    email: z.string({ message: requiredMessage }).email({ message: emailMessage }),
    firstname: z.string({ message: requiredMessage }).min(2, 'Le prénom doit contenir au moins 2 caractères'),
    lastname: z.string({ message: requiredMessage }).min(2, 'Le nom doit contenir au moins 2 caractères'),
    password: z.string({ message: requiredMessage }).min(8, passwordMessage).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, passwordRequirements),
    passwordConfirmation: z.string({ message: requiredMessage }).refine((value) => value === form.values.password, {
        message: passwordMatchMessage,
    }),
}));

const form = useForm({
    validationSchema: formSchema,
});

const route = useRoute();

const onSubmit = form.handleSubmit(async (values) => {
    const { data, error } = await useFetch(' /api/auth/register', {
        method: 'POST',
        body: {
            email: values.email,
            firstname: values.firstname,
            lastname: values.lastname,
            password: values.password,
            token: route.params.token
        }
    })

    if (error.value) console.error(error.value);
    else await navigateTo('/moocs');
})

const { data, error, status } = await useFetch('/api/auth/invitations/email', {
    method: 'POST',
    body: {
        tokenHash: route.params.token
    }
});

const errorMessage = ref(false);

if (data?.value?.email) form.setValues({ email: data.value.email });
else errorMessage.value = true;


</script>

<template>
    <Alert v-if="errorMessage" variant="destructive">
        <AlertCircle class="size-4" />
        <AlertTitle>Erreur</AlertTitle>
        <AlertDescription>
            Ce lien n'est pas ou plus valide
        </AlertDescription>
    </Alert>

    <Card v-else-if="status === 'success'" class="max-w-2xl mx-auto w-full">
        <CardHeader>
            <CardTitle>Inscription</CardTitle>
            <CardDescription>Créer un nouveau compte</CardDescription>
        </CardHeader>
        <CardContent>
            <form @submit="onSubmit" class="flex flex-col gap-3">
                <FormField v-slot="{ componentField }" name="email">
                    <FormItem>
                        <FormLabel>Mail</FormLabel>
                        <FormControl>
                            <Input type="email" disabled v-bind="componentField"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <div class="flex gap-3 w-full">
                    <FormField v-slot="{ componentField }" name="firstname">
                        <FormItem class="flex-1">
                            <FormLabel>Prénom</FormLabel>
                            <FormControl>
                                <Input type="text" v-bind="componentField"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="lastname">
                        <FormItem class="flex-1">
                            <FormLabel>Nom</FormLabel>
                            <FormControl>
                                <Input type="text" v-bind="componentField"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>

                <FormField v-slot="{ componentField }" name="password">
                    <FormItem>
                        <FormLabel>Mot de passe</FormLabel>
                        <FormControl>
                            <Input type="password" v-bind="componentField"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="passwordConfirmation">
                    <FormItem>
                        <FormLabel>Confirmation du mot de passe</FormLabel>
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

    <div v-else-if="status === 'pending'">
        <Loader2 class="size-12 mx-auto animate-spin"/>
    </div>
</template>
