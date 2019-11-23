import React from 'react';

import {
    unstable_Form as Form,
    unstable_FormInput as FormInput,
    unstable_FormLabel as FormLabel,
    unstable_FormMessage as FormMessage,
    unstable_FormSubmitButton as FormSubmitButton,
    unstable_useFormState as useFormState,
} from "reakit/Form";
import {loginValidationSchema} from "../validation-schemes";
import withValidation from '../with-validation';

const Login = (props) => {
    const form = useFormState({
        values: {name: "", password: ''},
        onSubmit: props.validate()
    });


    return (
        <Form {...form}>
            <FormLabel {...form} name="email">
                Adres e-mail:
            </FormLabel>
            <FormInput {...form} name="email"/>
            {form.errors.email && <span>{form.errors.email}</span>}
            <FormLabel {...form} name="password">
                Hasło:
            </FormLabel>
            <FormInput {...form} name="password" placeholder="John Doe"/>
            {form.errors.password && <span>{form.errors.password}</span>}
            <FormMessage {...form} name="name"/>
            <FormSubmitButton {...form}>Submit</FormSubmitButton>
        </Form>
    );
};

export default withValidation(Login, loginValidationSchema)
