<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useForm } from 'vee-validate';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { useUsers } from '~/stores/users.store';

const usersStore = useUsers();

const formSchema = toTypedSchema(z.object({
    email: z.string().email(),
    firstname: z.string().min(2),
    lastname: z.string().min(2),
    password: z.string().min(6),
    passwordConfirmation: z.string().refine((value) => value === form.values.password, {
        message: 'Passwords do not match',
    }),
}));

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
    await usersStore.register(values.email, values.firstname, values.lastname, values.password);
})

</script>

<template>
    <Card class="max-w-2xl mx-auto">
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
                            <Input type="email" v-bind="componentField"/>
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

                <Button type="submit" class="mt-3">
                    Valider
                </Button>
            </form>
        </CardContent>
    </Card>
</template>