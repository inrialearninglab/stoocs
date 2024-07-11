<script setup lang="ts">
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { useUsers } from '~/stores/users.store';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useForm } from 'vee-validate';
import { emailMessage, requiredMessage } from '~/schema/users.schema';
const usersStore = useUsers();

const user = useUser();

onMounted(async () => {
    if (user.value) {
        form.setValues({
            email: user.value.email,
            firstname: user.value.firstname,
            lastname: user.value.lastname,
        })
    } else {
        await navigateTo('/auth/login')
    }
})

const formSchema = toTypedSchema(z.object({
    email: z.string({ message: requiredMessage }).email({ message: emailMessage }),
    firstname: z.string({ message: requiredMessage }).min(2, 'Le prénom doit contenir au moins 2 caractères'),
    lastname: z.string({ message: requiredMessage }).min(2, 'Le nom doit contenir au moins 2 caractères'),
}));

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
    await usersStore.updateProfile(values.email, values.firstname, values.lastname)
})
</script>

<template>
    <Card class="w-full">
        <CardHeader>
            <CardTitle>Modification</CardTitle>
            <CardDescription>Modifier votre profil</CardDescription>
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

                <Button :disabled="!form.meta.value.valid" type="submit" class="mt-3">Valider</Button>
            </form>
        </CardContent>
    </Card>
</template>