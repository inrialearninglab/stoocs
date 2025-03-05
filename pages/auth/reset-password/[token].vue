<script setup lang="ts">
import { emailMessage, requiredMessage } from '~/schema/users.schema';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { useForm } from 'vee-validate';

const formSchema = toTypedSchema(
    z.object({
        email: z.string({ message: requiredMessage }).email({ message: emailMessage }),
    }),
);

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
    console.log(values);
});
</script>

<template>
    <Alert v-if="errorAlert" variant="destructive">
        <AlertCircle class="size-4" />
        <AlertTitle>Erreur</AlertTitle>
        <AlertDescription> Vos identifiants sont incorrects. Veuillez réessayer. </AlertDescription>
    </Alert>
</template>
