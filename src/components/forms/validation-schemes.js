import {object, string} from "yup";


export const loginValidationSchema = object({
    email: string().email('Podany adres e-mail nie jest prawidłowy!').required("Adres e-mail jest wymagany!"),
    password: string().required("Hasło jest wymagane!"),
});

export const addPostFirstStepForValidationSchema = object({
    expirationTime: string().required("A radio option is required")
});
