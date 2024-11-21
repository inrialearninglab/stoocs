import * as z from 'zod';

export const requiredMessage = 'Ce champ est obligatoire';
export const emailMessage = 'Veuillez entrer une adresse e-mail valide';
export const passwordMessage = 'Le mot de passe doit contenir au moins 8 caractères';
export const passwordMatchMessage = 'Les mots de passe ne correspondent pas';
export const passwordRequirements =
    'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial';

export const registerSchema = z.object({
    email: z.string({ message: requiredMessage }).email({ message: emailMessage }),
    firstname: z.string({ message: requiredMessage }).min(2, 'Le prénom doit contenir au moins 2 caractères'),
    lastname: z.string({ message: requiredMessage }).min(2, 'Le nom doit contenir au moins 2 caractères'),
    password: z
        .string({ message: requiredMessage })
        .min(8, passwordMessage)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, passwordRequirements),
});
