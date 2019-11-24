import React, {useEffect, useState} from 'react';

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
import {withRouter} from "react-router-dom";
import Loader from "../../loader";

const LoginForm = (props) => {
    const [hideLoader, setHideLoader] = useState(true);

    const getLoginData = async (data) => {
        setHideLoader(false);
        await fetch(`${window.urlApi}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                sessionStorage.setItem('user', JSON.stringify(data))
                props.history.push("/");
                setHideLoader(true);
            }).catch(() => {
                setHideLoader(true);
            });
    };

    const form = useFormState({
        values: {name: "", password: ''},
        validateOnBlur: false,
        validateOnChange: false,
        onValidate: props.validate(loginValidationSchema),
        onSubmit: (data) => getLoginData(data)
    });

    useEffect(() => {
        document.title = 'Logowanie - bezinteresowni';
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            props.history.push("/");
        }
    });

    return (
        <React.Fragment>
            <Loader hid={hideLoader}/>
            <Form {...form}>
                <div className="form-label-group">
                    <FormLabel {...form} name="email">
                        Adres e-mail:
                    </FormLabel>
                    <FormInput {...form} name="email" className="form-control" placeholder="adres email"/>
                    {form.errors.email && <span className='text-danger'>{form.errors.email}</span>}
                </div>
                <div className="form-label-group">
                    <FormLabel {...form} name="password">
                        Hasło:
                    </FormLabel>
                    <FormInput {...form} id="inputPassword" className="form-control" placeholder="Hasło"
                               name="password"/>
                    {form.errors.password && <span className='text-danger'>{form.errors.password}</span>}
                </div>
                <FormMessage {...form} name="name"/>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/>Pamiętaj mnie
                    </label>
                </div>
                <FormSubmitButton className="btn btn-secondary btn-block" type="submit" {...form}>Zaloguj
                    się</FormSubmitButton>
                <button className="btn btn-link text-secondary btn-block" type="submit">Nie masz konta? Zarejestruj się!
                </button>
            </Form>
        </React.Fragment>
    );
};

export default withRouter(withValidation(LoginForm))
