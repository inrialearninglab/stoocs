<script setup lang="ts">
import { emailMessage, requiredMessage } from '#shared/schema/users.schema';
import { Loader2 } from 'lucide-vue-next';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { useForm } from 'vee-validate';
import { toast } from 'vue-sonner';
import { createResetToken } from '~/services/auth.service';

const formSchema = toTypedSchema(
    z.object({
        email: z.string({ message: requiredMessage }).email({ message: emailMessage }),
    }),
);

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
    const { error } = await createResetToken(values.email);

    if (error) {
        toast.error('Une erreur est survenue');
        return;
    }

    toast.success('Si un compte existe avec cet email, un email de réinitialisation vous a été envoyé');
});
</script>

<template>
    <Dialog>
        <DialogTrigger class="hover:underline text-sm font-medium leading-none"> Mot de passe oublié ? </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle> Réinitialisation du mot de passe </DialogTitle>
                <DialogDescription>
                    Entrez votre adresse email pour réinitialiser votre mot de passe
                </DialogDescription>
            </DialogHeader>

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

                <DialogClose as-child>
                    <Button :disabled="!form.meta.value.valid || form.isSubmitting.value" type="submit" class="mt-3">
                        <Loader2 v-if="form.isSubmitting.value" class="size-4 mr-2 animate-spin" />
                        Valider
                    </Button>
                </DialogClose>
            </form>
        </DialogContent>
    </Dialog>
</template>
