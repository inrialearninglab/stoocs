<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useForm } from 'vee-validate';
import { useUsers } from '~/stores/users.store';
import { passwordMatchMessage, passwordMessage, passwordRequirements, requiredMessage } from '~/schema/users.schema';

const usersStore = useUsers();

const formSchema = toTypedSchema(
    z.object({
        password: z
            .string({ message: requiredMessage })
            .min(8, passwordMessage)
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, passwordRequirements),
        passwordConfirmation: z.string({ message: requiredMessage }).refine((value) => value === form.values.password, {
            message: passwordMatchMessage,
        }),
    }),
);

const form = useForm<z.infer<typeof formSchema>>({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
    await usersStore.updatePassword(values.password);
});
</script>

<template>
    <Card class="w-full">
        <CardHeader>
            <CardTitle>Modification</CardTitle>
            <CardDescription>Modifier votre mot de passe</CardDescription>
        </CardHeader>
        <CardContent>
            <form @submit="onSubmit" class="flex flex-col gap-3">
                <FormField v-slot="{ componentField }" name="password">
                    <FormItem>
                        <FormLabel>Nouveau mot de passe</FormLabel>
                        <FormControl>
                            <Input type="password" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="passwordConfirmation">
                    <FormItem>
                        <FormLabel>Confirmation du mot de passe</FormLabel>
                        <FormControl>
                            <Input type="password" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <Button :disabled="!form.meta.value.valid" type="submit" class="mt-3">Valider</Button>
            </form>
        </CardContent>
    </Card>
</template>
