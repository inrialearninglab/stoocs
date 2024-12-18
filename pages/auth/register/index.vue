<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useForm } from 'vee-validate';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Loader2, CircleX } from 'lucide-vue-next';
import { passwordMatchMessage, registerSchema, requiredMessage } from '~/schema/users.schema';
import { initRegister } from '~/services/auth.service';
import { toast } from 'vue-sonner';

const formSchema: any = toTypedSchema(
    registerSchema.extend({
        passwordConfirmation: z.string({ message: requiredMessage }).refine((value) => value === form.values.password, {
            message: passwordMatchMessage,
        }),
    }),
);

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values: any) => {
    console.log('submitting');
    const { error } = await initRegister(values.email, values.firstname, values.lastname, values.password);
    if (error) {
        console.log('error', error);
        toast.error('Une erreur est survenue lors de la création du compte');
    } else {
        toast.success('Compte créé avec succès');
        await navigateTo('/moocs');
    }
});
</script>

<template>
    <Card class="max-w-2xl mx-auto w-full">
        <CardHeader>
            <CardTitle>Inscription</CardTitle>
            <CardDescription>Créer le premier compte</CardDescription>
        </CardHeader>
        <CardContent>
            <form @submit="onSubmit" class="flex flex-col gap-3">
                <FormField v-slot="{ componentField }" name="email">
                    <FormItem>
                        <FormLabel>Mail</FormLabel>
                        <FormControl>
                            <Input type="email" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <div class="flex gap-3 w-full">
                    <FormField v-slot="{ componentField }" name="firstname">
                        <FormItem class="flex-1">
                            <FormLabel>Prénom</FormLabel>
                            <FormControl>
                                <Input type="text" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="lastname">
                        <FormItem class="flex-1">
                            <FormLabel>Nom</FormLabel>
                            <FormControl>
                                <Input type="text" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>

                <FormField v-slot="{ componentField }" name="password">
                    <FormItem>
                        <FormLabel>Mot de passe</FormLabel>
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

                <Button :disabled="!form.meta.value.valid || form.isSubmitting.value" type="submit" class="mt-3">
                    <Loader2 v-if="form.isSubmitting.value" class="size-4 mr-2 animate-spin" />
                    Valider
                </Button>
            </form>
        </CardContent>
    </Card>
</template>
