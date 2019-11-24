import {object, string} from "yup";

export const loginValidationSchema = object({
    email: string().email('Podany adres e-mail nie jest prawidłowy!').required("Adres e-mail jest wymagany!"),
    password: string().required("Hasło jest wymagane!"),
});

export const expirationDateFormSchema = object({
    expirationDate: string().required("Zaznacz jedną odpowiedź")
});

export const personProfileFormSchema = object({
    message: string().required("A message is required")
});

export const addressFormSchema = object({
    message: string().required("A message is required")
});

export const contactFormSchema = object({
    message: string().required("A message is required")
});
