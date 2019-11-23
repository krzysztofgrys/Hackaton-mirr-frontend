export const LoginValidation = object({
    email: string.email('Podany adres e-mail jest nieprawidłowy').required('Adres e-mail jest wymagany'),
    password: string()
        .required('Hasło jest wymagane')
        .min(8, 'Podane Hasło jest za krótkie')
});

