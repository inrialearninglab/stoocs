<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useForm } from 'vee-validate';
import { useUsers } from '~/stores/users.store';

const usersStore = useUsers();

const formSchema = toTypedSchema(z.object({
    password: z.string().min(6),
    passwordConfirmation: z.string().refine((value) => value === form.values.password, {
        message: 'Passwords do not match',
    }),
}));

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
    await usersStore.updatePassword(values.password)
})

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
                       <FormLabel>Mot de passe</FormLabel>
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