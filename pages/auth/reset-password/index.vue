<script setup lang="ts">
import { emailMessage, requiredMessage } from '~/schema/users.schema';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { useForm } from 'vee-validate';
import { toast } from 'vue-sonner';

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
    toast.success('Si un compte existe avec cet email, un email de réinitialisation vous a été envoyé');
});
</script>

<template>
    <Card class="max-w-lg mx-auto w-full">
        <CardHeader class="text-center items-center">
            <LayoutLogo class="w-32 h-auto mb-4" />
            <CardTitle>Réinitialisation du mot de passe</CardTitle>
        </CardHeader>

        <CardContent>
            <form @submit="onSubmit" class="flex flex-col gap-3">
                <FormField v-slot="{ componentField }" name="email">
                    <FormItem>
                        <FormLabel>Mail</FormLabel>
                        <FormControl>
                            <Input id="mail" type="email" placeholder="Entrez votre mail" v-bind="componentField" />
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
</template>
