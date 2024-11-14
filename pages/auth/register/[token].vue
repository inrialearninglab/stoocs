<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useForm } from 'vee-validate';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Loader2, CircleX } from 'lucide-vue-next';
import {
    passwordMatchMessage,
    registerSchema,
    requiredMessage
} from '~/schema/users.schema';
import { register } from '~/services/auth.service';
import { toast } from 'vue-sonner';

useHead({
    meta: [
        {
            name: 'referrer',
            content: 'strict-origin'
        }
    ]
});

const formSchema: any = toTypedSchema(registerSchema.extend({
    passwordConfirmation: z.string({ message: requiredMessage }).refine((value) => value === form.values.password, {
        message: passwordMatchMessage,
    }),
}));

const form = useForm({
    validationSchema: formSchema,
});

const route = useRoute();

const onSubmit = form.handleSubmit(async (values: any) => {
    const { error } = await register(values.email, values.firstname, values.lastname, values.password, route.params.token as string);
    if (error) {
        toast.error('Une erreur est survenue lors de la création du compte');
    }
    else {
        toast.success('Compte créé avec succès');
        await navigateTo('/moocs');
    }
})

const { data, status } = await useFetch('/api/auth/invitations/email', {
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
    <Card v-if="errorMessage" class="max-w-lg mx-auto w-full text-center pt-3 mt-12">
        <CardHeader>
            <CircleX class="size-24 stroke-destructive mb-2 mx-auto" />
            <CardTitle>Erreur</CardTitle>
            <CardDescription class="text-md">Ce lien est invalide ou a expiré</CardDescription>
        </CardHeader>
        <CardFooter>
            <Button as-child class="w-full">
                <NuxtLink to="/auth/login">
                    Retour
                </NuxtLink>
            </Button>
        </CardFooter>
    </Card>

    <Card v-else-if="status === 'success'" class="max-w-2xl mx-auto w-full border-none shadow-none">
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
