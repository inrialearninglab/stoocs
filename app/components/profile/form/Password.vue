<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { useForm } from 'vee-validate';
import {
    passwordMatchMessage,
    passwordMessage,
    passwordRequirements,
    requiredMessage,
} from '#shared/schema/users.schema';

const emits = defineEmits<{
    (e: 'submit', password: string): void;
}>();

// @ts-expect-error
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

// @ts-expect-error
const form = useForm<z.infer<typeof formSchema>>({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values: z.infer<typeof formSchema>) => {
    emits('submit', values.password);
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
                            <UtilsPasswordStrength v-bind="componentField" />
                        </FormControl>
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
